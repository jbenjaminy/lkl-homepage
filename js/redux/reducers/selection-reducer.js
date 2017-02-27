import {
    SELECT_PAGE,
    SELECT_PROJECT,
    TOGGLE_NAV,
    RESET_NAV,
    RESET_FLAG,
    RESET_STATE
} from '../actions/types';

const INITIAL_STATE = {
    projects: {},
    project: {},
    showDetails: false,
    toggled: false
};

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
       case SELECT_PAGE: {
            return Object.assign({}, state, {
                projects: action.data
            });
       }
       case SELECT_PROJECT: {
            return Object.assign({}, state, {
                project: action.data,
                showDetails: true
            });
       }
       case TOGGLE_NAV: {
            return Object.assign({}, state, {
                toggled: true
            });
       }
       case RESET_NAV: {
            return Object.assign({}, state, {
                toggled: false
            });
       }
       case RESET_FLAG: {
            return Object.assign({}, state, {
                showDetails: false
            });
       }
       case RESET_STATE:
           return INITIAL_STATE;
       default:
           return state;
   }
};
