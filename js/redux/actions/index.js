import {
    SELECT_PAGE,
    SELECT_PROJECT,
    TOGGLE_NAV,
    RESET_NAV,
    RESET_STATE

} from './types';

export const selectPage = (page) => ({
    type: SELECT_PAGE,
    data: page
});

export const selectProject = (project) => ({
    type: SELECT_PROJECT,
    data: project
});

export const toggleNav = () => ({
    type: TOGGLE_NAV
});

export const resetNav = () => ({
    type: RESET_NAV
});

export const resetState = () => ({
    type: RESET_STATE,
});
