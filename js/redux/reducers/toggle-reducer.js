export default (state = false, action) => {
    switch (action.type) {
        case 'toggle_nav':
            if (state = false) {
                return true;
            }
            return false;
        default:
            return state;
    }
};
