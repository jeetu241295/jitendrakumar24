import { createReducer } from '../../Global/redux';
import {
  navs,
  images,
  SUBMIT_LOADER,
  skills,
  SUGGESTION_DIALOG,
  education,
  experience,
  motto,
  about,
  projects,
  trips,
  offices,
  RATING
} from '../_helpers/constants';

const defaultState = {
  navs,
  images,
  loader: false,
  messageOpen: false,
  showRating: true,
  skills,
  education,
  projects,
  experience,
  motto,
  trips,
  about,
  offices
};

const personalWebsiteReducer = {
  [SUBMIT_LOADER]: state => ({
    ...state,
    loader: !state.loader
  }),
  [SUGGESTION_DIALOG]: (state, action) => ({
    ...state,
    messageOpen: action.value
  }),
  [RATING]: (state, action) => ({
    ...state,
    showRating: action.value
  })
};

export default createReducer(defaultState, personalWebsiteReducer);
