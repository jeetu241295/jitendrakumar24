import { createReducer } from '../../Global/redux';
import {
  navs,
  images,
  DIALOG,
  skills,
  education,
  experience,
  motto,
  about,
  projects,
  trips,
  offices
} from '../_helpers/constants';

const defaultState = {
  navs,
  images,
  imageOpen: false,
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
  })
};

export default createReducer(defaultState, personalWebsiteReducer);
