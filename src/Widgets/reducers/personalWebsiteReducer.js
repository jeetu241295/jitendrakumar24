import { createReducer } from '__GLOBAL__/redux';
import {
  navs,
  images,
  SUBMIT_LOADER,
  skills,
  SUGGESTION_DIALOG,
  RATING_VALUE,
  education,
  experience,
  motto,
  about,
  projects,
  trips,
  intrests,
  offices,
  RATING
} from '../_helpers/constants';

const defaultState = {
  navs,
  ratingValue: 0,
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
  offices,
  intrests
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
  }),
  [RATING_VALUE]: (state, action) => ({
    ...state,
    ratingValue: action.value
  })
};

export default createReducer(defaultState, personalWebsiteReducer);
