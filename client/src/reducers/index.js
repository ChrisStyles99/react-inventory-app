import itemReducer from './items';
import userReducer from './users';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  itemReducer,
  userReducer
});

export default allReducers;