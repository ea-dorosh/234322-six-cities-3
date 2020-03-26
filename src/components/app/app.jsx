import React, {PureComponent} from "react";
// import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/main.jsx";
import DetailInfo from "../detail-info/detail-info.jsx";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import SignIn from "../sign-in/sign-in.jsx";


class App extends PureComponent {
  constructor(props) {
    super(props);

  }

  _renderApplication() {

    // eslint-disable-next-line react/prop-types
    const {load, error, authorizationStatus, login} = this.props;

    if (!load) {
      return (
        <div style={{fontSize: 60 + `px`}}><p>Connection...</p></div>
      );
    }

    if (error) {
      return (
        // eslint-disable-next-line react/prop-types
        <div style={{fontSize: 60 + `px`, color: `red`}}><p>Connection... FAIL {error.status}</p></div>
      );
    }

    if (load === true) {
      return (
        <Main/>
      );
    }

    return null;
  }

  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApplication()}
          </Route>
          <Route path="/offer/:id">
            <DetailInfo/>
          </Route>
          <Route exact path="/dev-auth">
            <SignIn
              onSubmit={() => {}}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

// export default App;

const mapStateToProps = (state) => {
  return {
    authorizationStatus: getAuthorizationStatus(state),
    load: state.OFFERS.load,
    error: state.OFFERS.error,
  };
};

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
