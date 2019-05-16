import { combineReducers } from 'redux';
import flags from './flags';

export const REHYDRATION_COMPLETE = 'REHYDRATION_COMPLETE';
export const SET_TOP_NAVIGATION_COMPLETE = 'SET_TOP_NAVIGATION_COMPLETE';

export default combineReducers({ flags });
