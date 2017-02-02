export default (state = false, action) => {
    switch (action.type) {
        case 'toggle_nav':
            return !state;
        default:
            return state;
    }
};
