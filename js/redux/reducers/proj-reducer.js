export default (state = null, action) => {
    switch (action.type) {
        case 'select_project':
            return action.data;
        default:
            return state;
    }
};
