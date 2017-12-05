import { combineReducers } from 'redux';
import homeReducer from './screens/home/reducer';


const rootReducer = combineReducers({
  homeState: homeReducer
});

export default rootReducer;
