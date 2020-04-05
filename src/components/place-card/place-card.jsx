import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link, withRouter} from 'react-router-dom';
import {AppRoute, CITIES, ratingToStar} from "../../utils.js";
import {connect} from "react-redux";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {Operation as FavoriteOperation} from "../../reducer/favorites/favorites.js";
import {Operation as OffersOperation} from "../../reducer/offers/offers.js";


export class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);

    this._handleOfferHover = this._handleOfferHover.bind(this);
    this._toFavoritesHandler = this._toFavoritesHandler.bind(this);
  }


  _handleOfferHover() {
    if (this.props.handleOfferHover) {
      this.props.handleOfferHover(this.props.offer);
    }
  }

  _toFavoritesHandler() {
    const {history, handleFavoriteStatus, offer} = this.props;

    if (this.props.authorizationStatus === AuthorizationStatus.NO_AUTH) {
      history.push(AppRoute.LOGIN);

    } else if (this.props.authorizationStatus === AuthorizationStatus.AUTH) {
      const status = offer.isFavorite ? 0 : 1;
      handleFavoriteStatus(status, this.props.offer.id);
    }
  }


  render() {
    const {offer, cardClass, handleOfferHover} = this.props;


    const premium = <div className="place-card__mark">
      <span>Premium</span>
    </div>;

    const rating = ratingToStar(offer.rating);

    return (
      <article
        className={`${cardClass === CITIES ? `cities__place-card` : `near-places__card`} place-card`}
        onMouseEnter={this._handleOfferHover}
        onMouseLeave={() => {
          if (handleOfferHover) {
            handleOfferHover(null);
          }
        }}
      >
        {offer.isPremium ? premium : null}
        <div className={`${cardClass === CITIES ? CITIES : `near-places`}__image-wrapper place-card__image-wrapper`}>
          <Link to={AppRoute.offer(offer.id)}>
            <img className="place-card__image" src={`${offer.img}`} width="260" height="200" alt="Place image"/>
          </Link>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button
              className={`place-card__bookmark-button button ${offer.isFavorite ? `place-card__bookmark-button--active` : null}`}
              type="button"
              onClick={this._toFavoritesHandler}
            >
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"/>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: rating + `%`}}/>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <Link to={AppRoute.offer(offer.id)}>
            <h2 className="place-card__name">
              {offer.name}
            </h2>
          </Link>
          <p className="place-card__type">{offer.type}</p>
        </div>
      </article>
    );
  }
}

PlaceCard.propTypes = {
  offer: PropTypes.object.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  history: PropTypes.object,
  handleFavoriteStatus: PropTypes.func.isRequired,
  userProperties: PropTypes.object,
  offerReviews: PropTypes.array,
  nearOffers: PropTypes.array,
  offers: PropTypes.array,
  activeCity: PropTypes.object,
  cardClass: PropTypes.string,
  handleOfferHover: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {

  return {
    authorizationStatus: getAuthorizationStatus(state),
    history: ownProps.history,
    favoriteStatus: state.FAVORITE.favoriteStatus,
  };
};

const mapDispatchToProps = (dispatch) => ({

  handleFavoriteStatus(status, id) {
    dispatch(FavoriteOperation.addToFavorite(status, id));
    dispatch(OffersOperation.refreshOffers());
  }

});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlaceCard));
