export const toggleNav = () => ({
        type: 'toggle_nav'
});

export const selectPage = (page) => ({
        type: 'select_page',
        data: page
});

export const selectProject = (project) => ({
        type: 'select_project',
        data: project
});
