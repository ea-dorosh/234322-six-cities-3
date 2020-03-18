import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/main.jsx";
import DetailInfo from "../detail-info/detail-info.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/reducer.js";

class App extends PureComponent {
  constructor(props) {
    super(props);

  }

  _renderMain() {
    const {
      offers,
      cities,
      activeCity,
      handleCityClick,
      handleOffersSort,
      sortType,
      marker,
      handleOfferHover
    } = this.props;

    return (
      <Main
        offers={offers}
        cities={cities}
        activeCity={activeCity}
        advertsCount={offers.length}
        handleCityClick={handleCityClick}
        handleOffersSort={handleOffersSort}
        sortType={sortType}
        marker={marker}
        handleOfferHover={handleOfferHover}
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
  cities: PropTypes.array.isRequired,
  activeCity: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired
    }),
    name: PropTypes.string.isRequired,
  }).isRequired,
  offers: PropTypes.array.isRequired,
  handleCityClick: PropTypes.func.isRequired,
  handleOffersSort: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    cities: state.cities,
    activeCity: state.activeCity,
    offers: state.offers,
    sortType: state.sortType,
    marker: state.marker
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleCityClick(activeCity) {
    dispatch(ActionCreator.changeCity(activeCity));
    dispatch(ActionCreator.getOffers(activeCity.name));
  },

  handleOffersSort(sortType) {
    dispatch(ActionCreator.sortOffers(sortType));
  },

  handleOfferHover(offer) {
    dispatch(ActionCreator.highlightMarker(offer));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
