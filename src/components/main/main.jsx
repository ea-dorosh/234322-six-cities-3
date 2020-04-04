import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCardList from "../place-card-list/place-card-list.jsx";
import Map from "../map/map.jsx";
import LocationsList from "../locations-list/locations-list.jsx";
import SortOptions from "../sort-options/sort-options.jsx";
import {connect} from "react-redux";
import {CITIES} from "../../utils.js";
import {ActionCreator} from "../../reducer/main/main.js";
import MainEmpty from "../main-empty/main-emty.jsx";
import {getMarker} from "../../reducer/main/selectors.js";
import {selectOffers, getActiveCity, getLoadStatus, getError} from "../../reducer/offers/selectors.js";
import {Operation as UserOperation} from "../../reducer/user/user";
import HeaderUser from "../header-user/header-user.jsx";
import withLoad from "../../hocs/withLoad/withLoad.jsx";


class Main extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    const {
      activeCity,
      offers,
      marker,
      handleOfferHover,
    } = this.props;

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
                <HeaderUser/>
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
  }
}

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
  handleOfferHover: PropTypes.func,
  // marker: PropTypes.
};


const mapStateToProps = (state) => {

  return {
    activeCity: getActiveCity(state),
    offers: selectOffers(state),
    marker: getMarker(state),
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


export default withLoad(connect(mapStateToProps, mapDispatchToProps)(Main), getLoadStatus, getError);

