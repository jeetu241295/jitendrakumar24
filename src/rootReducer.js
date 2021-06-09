import { combineReducers } from 'redux';
import homeReducer from './Widgets/Home/reducer/homeReducer';
import routingReducer from './Widgets/Routing/reducer/routingReducer';
import registerReducer from './Widgets/Register/reducer/registerReducer';

export default combineReducers({
  homeReducer,
  routingReducer,
  registerReducer
});
