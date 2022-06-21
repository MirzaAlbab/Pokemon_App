import {combineReducers} from 'redux';
import {loginReducer} from '../../screen/Login/redux/reducer';
export const allreducer = combineReducers({
  login: loginReducer,
});
