export const toggleNav = (data) => {
    if (data === {}) {
        return ({
            type: 'toggle_nav'
        });
    }
    return ({
        type: 'toggle_nav',
        data
    });
};

export const selectPage = (page) => ({
        type: 'select_page',
        data: page
});

export const selectProject = (project) => ({
        type: 'select_project',
        data: project
});
