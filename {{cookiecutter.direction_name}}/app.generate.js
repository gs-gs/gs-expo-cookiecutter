const fs = require('fs');
require('dotenv').config();

const generatedFileName = './app.generated.json';
const environment = process.argv[2];

function parseAppJsonFromFile() {
  try {
    const appJsonStr = fs.readFileSync('./app.json', 'utf-8');
    const appJson = JSON.parse(appJsonStr);
    return appJson;
  } catch (e) {
    console.log('\x1b[31m', 'Error while reading app.json');
    console.log(' Please check your app.json again');
    console.log(` ${e}`);
    return null;
  }
}

function generateAppJson(_appJson) {
  const appJson = {
    ..._appJson,
  };

  const hooks = {
    postPublish: [
      {
        file: 'sentry-expo/upload-sourcemaps',
        config: {
          url: 'https://sentry.dawr.gosource.com.au',
          organization: 'dawr',
          // change this
          project: `lae-${environment.toLowerCase()}`,
          authToken: process.env.AUTH_TOKEN,
        },
      },
    ],
  };
  appJson.expo.hooks = hooks;
  fs.writeFile(
    generatedFileName, JSON.stringify(appJson, null, '\t'),
    (err) => {
      if (err) {
        return console.log(err);
      }
      console.log('\x1b[32m', 'Successfully created app.generated.json!\n');

      console.log(' Run the following command to build and publish your application:');
      console.log('\x1b[33m', 'expo publish --release-channel [integration|preproduction|production] --config ./app.generated.json\n\n');
      return true;
    },
  );
}

if (['integration', 'preproduction', 'production'].includes(environment.toLowerCase())) {
  const appJson = parseAppJsonFromFile();
  if (appJson) generateAppJson(appJson);
} else {
  console.log('\x1b[31m', 'Invalid argument.');
  console.log(' Can only contains these values: integration, preproduction, production.');
}
