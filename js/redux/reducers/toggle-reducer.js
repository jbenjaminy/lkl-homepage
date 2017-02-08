const INITIAL_STATE = { toggled: false };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'toggle_nav':
            return !state.toggled;
        default:
            return state;
    }
};
