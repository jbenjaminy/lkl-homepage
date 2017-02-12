const INITIAL_STATE = { toggled: false };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'toggle_nav': {
            let bool = false;
            if (state.toggled === false) {
                bool = true;
            }
            return Object.assign({}, state, {
                toggled: bool
            });
        }
        
        default:
            return state;
    }
};
