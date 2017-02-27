export const toggleNav = (bool) => ({
    type: 'toggle_nav',
    data: bool
});

export const selectPage = (page) => ({
        type: 'select_page',
        data: page
});

export const selectProject = (project) => ({
        type: 'select_project',
        data: project
});
