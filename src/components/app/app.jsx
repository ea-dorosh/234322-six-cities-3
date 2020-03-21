import React, {PureComponent} from "react";
// import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/main.jsx";
import DetailInfo from "../detail-info/detail-info.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

  }


  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route path="/offer/:id">
            <DetailInfo/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

