import { createReducer } from '../../Global/redux';
import {
  navs,
  images,
  DIALOG,
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
  imageOpen: false,
  messageOpen: false,
  showRating: true,
  index: 0,
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
  [DIALOG]: (state, action) => ({
    ...state,
    image: action.image,
    index: action.index,
    imageOpen: !state.imageOpen
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
