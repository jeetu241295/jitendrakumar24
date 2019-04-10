import { createReducer } from '../../Global/redux';
import {
  COUNT,
  navs,
  images,
  DIALOG,
  skills,
  education,
  experience,
  motto,
  about,
  schoolDetails,
  underGraduateDetails,
  workDetails,
  personalContent,
} from '../_helpers/constants';

const defaultState = {
  count: 0,
  setCount: null,
  navs,
  images,
  imageOpen: false,
  index: 0,
  skills,
  education,
  experience,
  motto,
  about,
  schoolDetails,
  underGraduateDetails,
  workDetails,
  personalContent,
};

const personalWebsiteReducer = {
  [COUNT]: (state, action) => ({
    ...state,
    count: state.count + 1,
    id: action.id,
  }),
  [DIALOG]: (state, action) => ({
    ...state,
    image: action.image,
    index: action.index,
    imageOpen: !state.imageOpen,
  }),
};

export default createReducer(defaultState, personalWebsiteReducer);
