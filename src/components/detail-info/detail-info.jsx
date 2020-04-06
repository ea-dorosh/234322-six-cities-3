import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import {Link, withRouter} from 'react-router-dom';
import Map from "../map/map.jsx";
import PlaceCardList from "../place-card-list/place-card-list.jsx";
import {connect} from "react-redux";
import {createSelector} from "reselect";
import {AppRoute, ratingToStar} from "../../utils.js";
import HeaderUser from "../header-user/header-user.jsx";
import CommentForm from "../comment-form/comment-form.jsx";
import {Operation as OffersOperation} from "../../reducer/offers/offers.js";
import {Operation as FavoriteOperation} from "../../reducer/favorites/favorites";
import {AuthorizationStatus} from "../../reducer/user/user";
import {getActiveCity, getError, getLoadStatus, getNearOffers, selectOffers} from "../../reducer/offers/selectors";
import {getAuthorizationStatus, getUserProperties} from "../../reducer/user/selectors";
import withLoad from "../../hocs/withLoad/withLoad.jsx";


export class DetailInfo extends PureComponent {
  constructor(props) {
    super(props);

    this.loadData = this.loadData.bind(this);
    this._toFavoritesHandler = this._toFavoritesHandler.bind(this);
  }

  _toFavoritesHandler() {
    const {history, handleFavoriteStatus, offer} = this.props;

    console.log(history)

    if (this.props.authorizationStatus === AuthorizationStatus.NO_AUTH) {
      history.push(AppRoute.LOGIN);

    } else if (this.props.authorizationStatus === AuthorizationStatus.AUTH) {
      const status = offer.isFavorite ? 0 : 1;
      handleFavoriteStatus(status, this.props.offer.id);
    }
  }

  loadData() {
    const {downloadNear, offer} = this.props;
    downloadNear(offer.id);
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    const {offer, userProperties, nearOffers, activeCity} = this.props;

    const premium = <div className="property__mark">
      <span>Premium</span>
    </div>;

    const rating = ratingToStar(offer.rating);

    const avatarClasses = `property__avatar-wrapper user__avatar-wrapper ${offer.holder.isSuper ? `property__avatar-wrapper--pro` : null}`;

    return (
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link to={AppRoute.ROOT} className="header__logo-link">
                  <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </Link>
              </div>
              <nav className="header__nav">
                <HeaderUser/>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {offer.photos.map((it, index) => (
                  index < 6 ?
                    <div className="property__image-wrapper" key={index}>
                      <img
                        className="property__image"
                        src={`${it}`}
                        alt="Photo studio"/>
                    </div>
                    :
                    null
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {offer.isPremium ? premium : null}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {offer.name}
                  </h1>
                  <button
                    className={`property__bookmark-button button ${offer.isFavorite ? `property__bookmark-button--active` : null}`}
                    type="button"
                    onClick={this._toFavoritesHandler}
                  >
                    <svg className="property__bookmark-icon place-card__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"/>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: rating + `%`}}/>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{offer.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {offer.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {offer.bedRoomQuantity} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {offer.maxGuestQuantity} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{offer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {offer.details.map((it, index) => (
                      <li className="property__inside-item" key={index}>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={avatarClasses}>
                      <img className="property__avatar user__avatar" src={`/${offer.holder.img}`} width="74" height="74"
                        alt="Host avatar"/>
                    </div>
                    <span className="property__user-name">
                      {offer.holder.holderName}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {offer.description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <ReviewsList
                    id={offer.id}
                  />
                  { userProperties ?
                    <CommentForm
                      id={offer.id}
                    />
                    :
                    null }
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map
                offers={nearOffers}
                activeCity={activeCity}
                activeOffer={offer}
              />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <PlaceCardList
                offers={nearOffers}
              />
            </section>
          </div>
        </main>
      </div>
    );
  }
}

DetailInfo.propTypes = {
  downloadNear: PropTypes.func.isRequired,
  offer: PropTypes.object.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  history: PropTypes.object,
  handleFavoriteStatus: PropTypes.func.isRequired,
  userProperties: PropTypes.object,
  offerReviews: PropTypes.array,
  nearOffers: PropTypes.array,
  offers: PropTypes.array,
  activeCity: PropTypes.object.isRequired,
};


const selectOfferById = createSelector([
  selectOffers,
  (state, id) => id
], (offers, id) => offers.find((offer) => offer.id === id)
);

const mapStateToProps = (state, ownProps) => {

  const offerId = Number(ownProps.match.params.id);

  return {
    authorizationStatus: getAuthorizationStatus(state),
    history: ownProps.history,
    favoriteStatus: state.FAVORITE.favoriteStatus,
    offer: selectOfferById(state, offerId),
    activeCity: getActiveCity(state),
    userProperties: getUserProperties(state),
    nearOffers: getNearOffers(state),
  };
};

const mapDispatchToProps = (dispatch) => ({

  downloadNear(id) {
    dispatch(OffersOperation.downloadNearOffers(id));
  },

  handleFavoriteStatus(status, id) {
    dispatch(FavoriteOperation.addToFavorite(status, id));
    dispatch(OffersOperation.refreshOffers());
  }
});

export default withRouter(withLoad(connect(mapStateToProps, mapDispatchToProps)(DetailInfo), getLoadStatus, getError));
