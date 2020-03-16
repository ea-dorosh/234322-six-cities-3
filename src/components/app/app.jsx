import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/main.jsx";
import DetailInfo from "../detail-info/detail-info.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      detailInfo: null
    };
  }

  _renderMain() {
    const {advertsCount, offers} = this.props;

    return (
      <Main
        advertsCount = {advertsCount}
        offers = {offers}
      />
    );
  }

  render() {
    const {offers} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMain()}
          </Route>
          <Route exact path="/offer">
            <DetailInfo offer={offers[1]}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: PropTypes.array.isRequired,
  advertsCount: PropTypes.number.isRequired,
};


export default App;
