import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import DetailInfo from "../detail-info/detail-info.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      detailInfo: null
    };

    this._placeNameHeaderHandler = this._placeNameHeaderHandler.bind(this);
  }

  _placeNameHeaderHandler(offer) {
    this.setState({
      detailInfo: offer
    });
  }

  _renderMain() {
    const {advertsCount, offers} = this.props;

    return (
      <Main
        advertsCount = {advertsCount}
        onPlaceNameHeaderClick = {this._placeNameHeaderHandler}
        offers = {offers}
      />
    );
  }

  render() {
    if (this.state.detailInfo) {
      return <DetailInfo offer={this.state.detailInfo} />;
    }

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMain()}
          </Route>
          <Route exact path="/detail-info">
            <DetailInfo/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        isPremium: PropTypes.bool.isRequired,
        rating: PropTypes.number.isRequired
      })
  ).isRequired,
  advertsCount: PropTypes.number.isRequired,
};


export default App;
