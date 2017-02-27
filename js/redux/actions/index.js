import {
    SELECT_PAGE,
    SELECT_PROJECT,
    VIEW_DETAILS,
    TOGGLE_NAV
} from './types';

export const selectPage = (page) => ({
    type: SELECT_PAGE,
    data: page
});

export const selectProject = (project) => ({
    type: SELECT_PROJECT,
    data: project
});

export const viewDetails = (data) => ({
    type: VIEW_DETAILS,
    data: data.bool
});

export const toggleNav = (data) => ({
    type: TOGGLE_NAV,
    data: data.bool
});
