import {
    SELECT_PAGE,
    SELECT_PROJECT,
    TOGGLE_NAV,
    RESET_NAV,
    RESET_STATE
} from '../actions/types';

const INITIAL_STATE = {
    projects: {},
    project: {},
    showDetails: false,
    toggleNav: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SELECT_PAGE':
            return action.data;
        default:
            return state;
    }


     const INITIAL_STATE = {
         page: 1,
         compartment: '',
    // PAGE 1
         name: '',
         dosage: '',
         // mg
        //  appearance: null,
        image: '',
    // PAGE 2
         howOften: '',
        //  days interval (as needed, every day - every 29 days)
         dailyDoses: '',
    // PAGE 3
        timePickerSelection: new Date(),
        timeZoneOffsetInHours: (-1) * ((new Date()).getTimezoneOffset() / 60),
        doseTimes: [],
    // PAGE 4
        rxNum: '',
        pillsRemaining: '',
        endDate: new Date()
     };

     export default (state = INITIAL_STATE, action) => {
        switch (action.type) {
            case MED_UPDATE:
            /*
             *  Because we are in the reducer, we always want to make sure we return
                an object.
             *  Square braces are not an array -- called 'key interpolation'.
             *  Key that we're adding to the object here will be determined at
                runtime.
             *  If we call our action creator with the prop of 'name', the key set
                for the value that we're adding to the object set to 'name'.
             *  '...state' refers to default value for state.
             */
                return { ...state, [action.data.prop]: action.data.value };
            case CLEAR_MED_FORM:
                return INITIAL_STATE;
            default:
                return state;
        }
     };
