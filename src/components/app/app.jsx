import React, {PureComponent} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {AppRoute} from "../../utils.js";
import Main from "../main/main.jsx";
import DetailInfo from "../detail-info/detail-info.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import Favorites from "../favorites/favorites.jsx";


class App extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <BrowserRouter>
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
          <Route exact path={AppRoute.FAVORITE}>
            <Favorites/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
