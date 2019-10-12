import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reset } from 'redux-form';
import ContactPage from './ContactPage';
import * as personalWebsiteActions from '../../actions/personalWebsiteActions';

const mapStatetoProps = state => ({
  ...state.personalWebsiteReducer
});

const mapDispatchtoProps = dispatch => ({
  ...bindActionCreators(personalWebsiteActions, dispatch),
  reset: () => dispatch(reset('contactForm'))
});

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(ContactPage);
