import { connect } from "react-redux";
import LoginPage from "./component";
import { bindActionCreators } from "redux";
import * as loginPageActions from "../../actions/loginPageActions";

const mapStatetoProps = state => ({
  ...state.loginPageReducer
});

const mapDispatchtoProps = dispatch =>
  bindActionCreators(loginPageActions, dispatch);

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(LoginPage);
