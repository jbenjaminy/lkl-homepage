import { combineReducers } from 'redux';
import ProjListReducer from './proj-list-reducer';
import SelectionReducer from './selection-reducer';

export default combineReducers({
    projectList: ProjListReducer,
    app: SelectionReducer
});
