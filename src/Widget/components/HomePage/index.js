import { connect } from "react-redux";
import HomePage from "./HomePage";
import { bindActionCreators } from "redux";
import * as personalWebsiteActions from "../../actions/personalWebsiteActions";

const mapStatetoProps = state => ({
  ...state.personalWebsiteReducer
});

const mapDispatchtoProps = dispatch =>
  bindActionCreators(personalWebsiteActions, dispatch);

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(HomePage);
