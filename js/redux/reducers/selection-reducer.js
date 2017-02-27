import {
    SELECT_PAGE,
    SELECT_PROJECT,
    TOGGLE_NAV,
    RESET_NAV,
    RESET_STATE
} from '../actions/types';

const INITIAL_STATE = {
    projects: {},
    project: {},
    showDetails: false,
    toggleNav: false
};

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
       case SELECT_PAGE:
           return { ...state, projects: action.data };
       case SELECT_PROJECT:
           return { ...state, project: action.data, showDetails: true };
       case TOGGLE_NAV:
           return { ...state, toggleNav: true };
       case RESET_NAV:
            return { ...state, toggleNav: false };
       case RESET_STATE:
           return INITIAL_STATE;
       default:
           return state;
   }
};
