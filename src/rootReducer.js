import { combineReducers } from 'redux';
import personalWebsiteReducer from './Widget/personalWebsiteSlice';

export default combineReducers({
  personalWebsite: personalWebsiteReducer
});
