import React, {PureComponent} from "react";
// import PropTypes from "prop-types";
import {Router, Route, Switch} from "react-router-dom";
import Main from "../main/main.jsx";
import DetailInfo from "../detail-info/detail-info.jsx";
import {connect} from "react-redux";
import SignIn from "../sign-in/sign-in.jsx";
import {AppRoute} from "../../utils.js";


class App extends PureComponent {
  constructor(props) {
    super(props);

  }

  _renderApplication() {

    // eslint-disable-next-line react/prop-types
    const {load, error} = this.props;

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
      <Router>
        <Switch>
          <Route exact path={AppRoute.ROOT}>
            <Main/>
          </Route>
          <Route path="/offer/:id">
            <DetailInfo/>
          </Route>
          <Route exact path={AppRoute.LOGIN}>
            <SignIn/>
          </Route>
        </Switch>
      </Router>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    load: state.OFFERS.load,
    error: state.OFFERS.error
  };
};


export default connect(mapStateToProps)(App);
