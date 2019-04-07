import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import personalWebsiteReducer from './personalWebsiteReducer';

export default combineReducers({
  personalWebsiteReducer,
  form: formReducer,
});
