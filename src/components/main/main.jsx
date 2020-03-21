import React from "react";
import PropTypes from "prop-types";
import PlaceCardList from "../place-card-list/place-card-list.jsx";
import Map from "../map/map.jsx";
import LocationsList from "../locations-list/location-list.jsx";
import SortOptions from "../sort-options/sort-options.jsx";
import {connect} from "react-redux";
import {CITIES, SortType} from "../../utils.js";
import {ActionCreator} from "../../reducer/reducer.js";
import withActiveItem from "../../hocs/withActiveItem/withActiveItem.jsx";
import {createSelector} from "reselect";

const Main = (props) => {
  const {
    activeCity,
    offers,
    // eslint-disable-next-line react/prop-types
    marker, handleOfferHover,
  } = props;

  const SortOptionsHoc = withActiveItem(SortOptions);

  const advertsCount = offers.length;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{advertsCount} places to stay in {activeCity.name}</b>
              <SortOptionsHoc/>
              <PlaceCardList
                offers={offers}
                handleOfferHover={handleOfferHover}
                listClass={CITIES}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  offers={offers}
                  marker={marker}
                  activeCity={activeCity}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  offers: PropTypes.array,
  activeCity: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number
    }),
    name: PropTypes.string,
  }).isRequired,
  handleOffersSort: PropTypes.func,
  sortType: PropTypes.string,
};

function selectOffers(state) {
  return state.offers;
}

function getSortedOffers(offers, sortType) {
  switch (sortType) {
    case SortType.PRICE_TO_LOW:
      return offers.slice().sort((a, b) => b.price - a.price);
    case SortType.PRICE_TO_HIGH:
      return offers.slice().sort((a, b) => a.price - b.price);
    case SortType.TOP_RATED:
      return offers.slice().sort((a, b) => b.rating - a.rating);
  }
  return offers;
}

const sortOffersBySortType = createSelector([
  selectOffers,
  (state) => state.sortType
], (offers, sortType) => getSortedOffers(offers, sortType)
);

const mapStateToProps = (state) => {
  return {
    activeCity: state.activeCity,
    offers: sortOffersBySortType(state),
    marker: state.marker
  };
};

const mapDispatchToProps = (dispatch) => ({

  handleOfferHover(offer) {
    dispatch(ActionCreator.highlightMarker(offer));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Main);

