import { combineReducers } from 'redux';
import ToggleReducer from './toggle-reducer';
import PageReducer from './page-reducer';
import ProjReducer from './proj-reducer';
import ProjListReducer from './proj-list-reducer';

export default combineReducers({
    toggled: ToggleReducer,
    page: PageReducer,
    projects: ProjListReducer,
    project: ProjReducer,
});
