import _get from 'lodash/get';
import _merge from 'lodash/merge';

// action
export const SET_FLAGS = 'flags/SET_FLAGS';

// selector
const emptyFlags = {};
export const getFlags = state => state.flags || emptyFlags;
export const getFlag = (flags, feature) => _get(flags, feature, false);
export const getFlagFromState = (state, flag) => getFlag(getFlags(state), flag);


// action creator
const setFlagsAction = flags => ({
  type: SET_FLAGS,
  flags,
});

export const actions = {
  setFlagsAction,
};

export const initialState = {
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FLAGS:
      return ({
        ...state,
        ...action.flags,
      });
    default:
      return state;
  }
}
