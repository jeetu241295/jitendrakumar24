import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Routing from './Component';
import * as personalWebsiteAction from '../../actions/personalWebsiteActions';

const mapStatetoProps = state => ({
  ...state.personalWebsiteReducer,
});

const mapDispatchtoProps = dispatch =>
  bindActionCreators(personalWebsiteAction, dispatch);

export default connect(
  mapStatetoProps,
  mapDispatchtoProps,
)(Routing);
