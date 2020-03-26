import React from "react";
import PropTypes from "prop-types";
import PlaceCardList from "../place-card-list/place-card-list.jsx";
import Map from "../map/map.jsx";
import LocationsList from "../locations-list/location-list.jsx";
import SortOptions from "../sort-options/sort-options.jsx";
import {connect} from "react-redux";
import {CITIES} from "../../utils.js";
import {ActionCreator} from "../../reducer/main/main.js";
import MainEmpty from "../main-empty/main-emty.jsx";
import {getMarker} from "../../reducer/main/selectors.js";
import {selectOffers, getActiveCity} from "../../reducer/offers/selectors.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {Operation as UserOperation} from "../../reducer/user/user";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {Link} from 'react-router-dom';


const Main = (props) => {
  const {
    // eslint-disable-next-line react/prop-types
    authorizationStatus,
    activeCity,
    offers,
    // eslint-disable-next-line react/prop-types
    marker, handleOfferHover,
  } = props;

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
                  <Link
                    to={`/dev-auth`}
                    className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">
                      {authorizationStatus === AuthorizationStatus.NO_AUTH ? `Sign in` : `Oliver.conner@gmail.com`}
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className={`page__main page__main--index ${ advertsCount ? `` : `page__main--index-empty` }`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList/>
          </section>
        </div>
        <div className="cities">
          { advertsCount ?
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{advertsCount} places to stay in {activeCity.name}</b>
                <SortOptions/>
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
            :
            <MainEmpty
              activeCity={activeCity}
            />
          }
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


const mapStateToProps = (state) => {
  return {
    authorizationStatus: getAuthorizationStatus(state),
    activeCity: getActiveCity(state),
    offers: selectOffers(state),
    marker: getMarker(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },

  handleOfferHover(offer) {
    dispatch(ActionCreator.highlightMarker(offer));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Main);

