import React from "react";
import PropTypes from "prop-types";
import PlaceCardList from "../place-card-list/place-card-list.jsx";
import Map from "../map/map.jsx";
import LocationsList from "../locations-list/location-list.jsx";
import SortOptions from "../sort-options/sort-options.jsx";
import {ActionCreator} from "../../reducer/reducer";
import {connect} from "react-redux";


const Main = (props) => {
  const {cities, activeCity, handleCityClick, offers, advertsCount, handleOffersSort, sortType, marker, handleOfferHover} = props;

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
            <LocationsList
              cities={cities}
              activeCity={activeCity}
              handleCityClick={handleCityClick}
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{advertsCount} places to stay in Amsterdam</b>
              <SortOptions
                handleOffersSort={handleOffersSort}
                sortType={sortType}
              />
              <PlaceCardList
                offers={offers}
                listClass={`cities`}
                activeCity={activeCity}
                sortType={sortType}
                handleOfferHover={handleOfferHover}
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
  advertsCount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,
  activeCity: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired
    }),
    name: PropTypes.string.isRequired,
  }).isRequired,
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


export default connect(mapStateToProps, mapDispatchToProps)(Main);

