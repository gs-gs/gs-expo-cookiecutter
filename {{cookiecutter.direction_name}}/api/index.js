
import axios from 'axios';
import * as Expo from 'expo';
import url from 'url';

const apiUrl = {
  dev: '{{cookiecutter.api_dev}}',
  integration: '{{cookiecutter.api_integration}}',
  preproduction: '{{cookiecutter.api_preproduction}}',
  production: '{{cookiecutter.api_production}}',
};

const API_CONFIG_PATH = '';

const AUTH_PATH = '';

const setDefaults = (defaults) => {
  Object.keys(defaults).forEach((key) => {
    axios.defaults[key] = defaults[key];
  });
};

const setToken = (token) => {
  const { headers } = axios.defaults;
  axios.defaults.headers = {
    ...headers,
    Authorization: `Token ${token}`,
  };
};

const getApiUrlBase = () => {
  const { releaseChannel } = Expo.Constants.manifest;
  if (releaseChannel === undefined) return apiUrl.dev;
  if (releaseChannel.indexOf('integration') !== -1) return apiUrl.integration;
  if (releaseChannel.indexOf('preproduction') !== -1) return apiUrl.preproduction;
  if (releaseChannel.indexOf('production') !== -1) return apiUrl.production;
  return apiUrl.integration;
};

const getConfig = (optionalConfig = {}) => (
  axios({
    ...optionalConfig,
    method: 'get',
    baseURL: getApiUrlBase(),
    url: API_CONFIG_PATH,
  }).then(response => ({ response }))
    .catch(error => ({ error }))
);

export const getAuthWebViewUrl = () => url.resolve(getApiUrlBase(), AUTH_PATH);

/* eslint-disable camelcase */

const Api = {
  setDefaults,
  setToken,
  getConfig,
};

export default Api;
