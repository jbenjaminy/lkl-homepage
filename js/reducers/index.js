import { combineReducers } from 'redux';
import PageReducer from './page-reducer';
import ProjReducer from './proj-reducer';
import SelectedReducer from './selected-reducer';

export default combineReducers({
    page: PageReducer,
    projects: ProjReducer,
    project: SelectedReducer,
});
