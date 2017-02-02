export default (state = null, action) => {
    switch (action.type) {
        case 'select_proj':
            return action.data;
        default:
            return state;
    }
};
