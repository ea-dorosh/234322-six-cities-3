import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {AppRoute} from "../../utils.js";
import {Link, Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../reducer/user/user";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {getFavoriteOffers} from "../../reducer/offers/selectors";
import {getCities} from "../../utils";
import FavoritesCityItem from "../favorites-city-item/favorites-city-item.jsx";


export class Favorites extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    const {authorizationStatus, offers, cities} = this.props;

    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      return (
        <Redirect to={AppRoute.LOGIN}/>
      );
    }

    return (
      <div className={`page ${offers.length === 0 ? `page--favorites-empty` : null}`}>
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link to={AppRoute.ROOT}>
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </Link>
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
        {offers.length === 0
          ?
          <main className="page__main page__main--favorites page__main--favorites-empty">
            <div className="page__favorites-container container">
              <section className="favorites favorites--empty">
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan yor future
                    trips.</p>
                </div>
              </section>
            </div>
          </main>
          :
          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {cities.map((city, index) => (
                    <FavoritesCityItem
                      key={index}
                      offers={offers}
                      city={city}
                    />
                  ))}
                </ul>
              </section>
            </div>
          </main>
        }
        <footer className="footer container">
          <a href className="footer__logo-link">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
          </a>
        </footer>
      </div>
    );
  }
}

Favorites.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {

  const offers = getFavoriteOffers(state);
  const cities = getCities(offers);

  return {
    authorizationStatus: getAuthorizationStatus(state),
    offers,
    cities,
  };
};

export default connect(mapStateToProps)(Favorites);

