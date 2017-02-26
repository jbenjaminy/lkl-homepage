const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'select_project':
            return action.data;
        default:
            return state;
    }
};
