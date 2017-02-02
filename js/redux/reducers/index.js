import { combineReducers } from 'redux';
import ToggleReducer from './toggle-reducer';
import PageReducer from './page-reducer';
import ProjReducer from './proj-reducer';
import SelectedReducer from './selected-reducer';

export default combineReducers({
    toggled: ToggleReducer,
    page: PageReducer,
    projects: ProjReducer,
    project: SelectedReducer,
});
