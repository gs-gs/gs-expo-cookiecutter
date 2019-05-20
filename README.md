# gs-expo-cookiecutter
A cookiecutter template for expo apps, done the way we currently like it.

# Convenient features
- It is good for data collection through forms.
- Uses store-and-forward approach for offline first approach.
- Updates made easy through Expo SDK via OTA update mechanism.
- Easy to focus on data: what do you want to capture? what do you want to send?
- For more bespoke development (via custom native libraries) it's a good starting point for an "detached" experience (e.g. via ExpoKit).
- Multi-platform (react-native), if you need to support android and ios.
- Integrates many technical with react native.

 # Technical 
- **React native**: React Native lets you build mobile apps using only JavaScript. It uses the same design as React, letting you compose a rich mobile UI using declarative components.The apps you are building with React Native aren't mobile web apps because React Native uses the same fundamental UI building blocks as regular iOS and Android apps. Instead of using Swift, Kotlin or Java, you are putting those building blocks together using JavaScript and React.React Native lets you build your app faster. Instead of recompiling, you can reload your app instantly. With Hot Reloading, you can even run new code while retaining your application state.
- **Redux** : a predictable state container for JavaScript apps.Redux makes it easy to manage the state of your application. Another way of looking at this – it helps you manage the data you display and how you respond to user actions. Redux include store, action, reducers, dispatch.
- **React redux** (version 6): the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data. We use version 6 of React-Redux because of the version 7 uses Hook API, which isn't supported by Expo at the moment.
- **Redux Persist**: an extremely simple way to persist your entire redux store to disk, and load it into memory when the app launches again. Redux Persist is an abstraction layer on top of AsyncStorage.
- **Redux sage**: make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures.The mental model is that a saga is like a separate thread in your application that's solely responsible for side effects. redux-saga is a redux middleware, which means this thread can be started, paused and cancelled from the main application with normal redux actions, it has access to the full redux application state and it can dispatch redux actions as well.
- **Sentry**: an open-source error tracking tool that helps you monitor and fix crashes in real time. Here we cover everything about the product, the platform integrations, and our on-premise offering.
- **Cookiecutter**: Cookiecutter takes a source directory tree and copies it into your new project. It replaces all the names that it finds surrounded by templating tags `{{` and `}}` with names that it finds in the file cookiecutter.json.The replaced names can be file names, directory names, and strings inside files.With Cookiecutter, you can easily bootstrap a new project from a standard form, which means you skip all the usual mistakes when starting a new project.
- **Expo**: With Expo tools, services, and React Native, you can build, deploy, and quickly iterate on native iOS and Android apps from the same JavaScript codebase.
Access to device capabilities like camera, location, notifications, sensors, haptics, and much more, all with cross-platform APIs.Build service gives you app-store ready binaries and handles certificates, no need for you to touch Xcode or Android Studio.Over-the-air updates let you update your app at any time without the hassle and delays of submitting to the store.
- **React Navigation**: provides an easy to use navigation solution, with the ability to present common stack navigation and tabbed navigation patterns on both iOS and Android.
- **Jest**: the most widely used JavaScript unit testing framework, so you may be even be familiar with it already. This guide explains how to set up Jest in your project, write a unit test, write a snapshot test, and common problems that people encounter when using Jest in React Native.
- **React native debugger**: debug the program.

 # Library
- react-native: https://facebook.github.io/react-native/
- react-redux@6: https://redux.js.org/
- redux-saga:  https://redux-saga.js.org
- persist-redux:  https://github.com/rt2zz/redux-persist
- cookiecutter: https://cookiecutter.readthedocs.io/
- sentry: https://docs.sentry.io/clients/react-native/
- expo: https://expo.io/
- react-navigation: https://reactnavigation.org/
- jest-expo: https://docs.expo.io/versions/latest/guides/testing-with-jest/
- redux-devtools-extension :https://github.com/zalmoxisus/redux-devtools-extension

 # Intruction
- Step 1: 
  ```
  git clone https://github.com/gs-gs/gs-expo-cookiecutter.git
  ```
- Step 2:
  ```
  cookiecutter gs-expo-cookiecutter
  ```
- Step 3: Input needed information.
```
^^/GoSource >>> cookiecutter gs-expo-cookiecutter/                                                            
app_name [expo-cookiecutter]: cookiecutter
direction_name [cookiecutter]: cookiecutter
sentry_integration [required]: https://gosource.com.au/                                                
sentry_preproduction [required]: https://gosource.com.au/
sentry_production [required]: https://gosource.com.au/
api_dev [required]: https://gosource.com.au/
api_integration [required]: https://gosource.com.au/
api_preproduction [required]: https://gosource.com.au/
api_production [required]: https://gosource.com.au/
primaryColor [#7a3f47]: red              
secondColor [#343434]: blue
backgroundColor [#ebeaa7]: white
textColor [#343434]: #343434
```
