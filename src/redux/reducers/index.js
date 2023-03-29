import {combineReducers} from 'redux'
import {studentReducer} from './StudentReducer';

const reducers = combineReducers({
  AllStudent: studentReducer,
})
export default reducers;