import { createStore, applyMiddleware } from 'redux';
import { AsyncStorage } from 'react-native';
import { persistStore, persistReducer, createMigrate } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import * as Expo from 'expo';
import Sentry from 'sentry-expo';
import createRavenMiddleware from 'raven-for-redux';
import rootSaga from '../sagas';
import rootReducer, { REHYDRATION_COMPLETE } from '../reducers';
import migrations from './migrations';

// Setup Sentry
Sentry.enableInExpoDevelopment = true;
const SENTRY_URL = {
  integration: '{{cookiecutter.sentry_integration}}',
  preproduction: '{{cookiecutter.sentry_preproduction}}',
  production: '{{cookiecutter.sentry_production}}',
};
const getSentryUrl = () => {
  const { releaseChannel } = Expo.Constants.manifest;
  if (releaseChannel === undefined) return SENTRY_URL.integration;
  if (releaseChannel.indexOf('integration') !== -1) return SENTRY_URL.integration;
  if (releaseChannel.indexOf('preproduction') !== -1) return SENTRY_URL.preproduction;
  if (releaseChannel.indexOf('production') !== -1) return SENTRY_URL.production;
  return SENTRY_URL.integration;
};
const sentryUrl = getSentryUrl();
Sentry.config(sentryUrl).install();

const persistConfig = {
  key: 'root',
  version: 0,
  storage: AsyncStorage,
  debug: true,
  blacklist: [],
  migrate: createMigrate(migrations, { debug: true }),
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const sentryReduxMiddleware = createRavenMiddleware(Sentry, {});

export default () => {
  const store = createStore(
    persistedReducer,
    {},
    composeWithDevTools(applyMiddleware(
      sagaMiddleware,
      sentryReduxMiddleware,
    )),
  );
  sagaMiddleware.run(rootSaga);
  AsyncStorage.clear();

  const persistor = persistStore(store, null, () => store.dispatch({ type: REHYDRATION_COMPLETE }));

  return { store, persistor };
};
