import React, {PureComponent} from "react";
// import PropTypes from "prop-types";
import {Link, withRouter} from 'react-router-dom';
import {AppRoute, CITIES, ratingToStar} from "../../utils.js";
import {connect} from "react-redux";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {Operation as FavoriteOperation} from "../../reducer/favorites/favorites.js";
import {Operation as OffersOperation} from "../../reducer/offers/offers.js";


class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);

    this._handleOfferHover = this._handleOfferHover.bind(this);
    this._toFavoritesHandler = this._toFavoritesHandler.bind(this);
  }


  _handleOfferHover() {
    // eslint-disable-next-line react/prop-types
    if (this.props.handleOfferHover) {
      // eslint-disable-next-line react/prop-types
      this.props.handleOfferHover(this.props.offer);
    }
  }

  _toFavoritesHandler() {
    // eslint-disable-next-line react/prop-types
    const {history, handleFavoriteStatus, offer} = this.props;

    // eslint-disable-next-line react/prop-types
    if (this.props.authorizationStatus === AuthorizationStatus.NO_AUTH) {
      // eslint-disable-next-line react/prop-types
      history.push(AppRoute.LOGIN);

      // eslint-disable-next-line react/prop-types
    } else if (this.props.authorizationStatus === AuthorizationStatus.AUTH) {
      const status = offer.isFavorite ? 0 : 1;
      // eslint-disable-next-line react/prop-types
      handleFavoriteStatus(status, this.props.offer.id);
    }
  }


  render() {
    // eslint-disable-next-line react/prop-types
    const {offer, cardClass, handleOfferHover} = this.props;


    const premium = <div className="place-card__mark">
      <span>Premium</span>
    </div>;

    // eslint-disable-next-line react/prop-types
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
        {/* eslint-disable-next-line react/prop-types */}
        {offer.isPremium ? premium : null}
        <div className={`${cardClass === CITIES ? CITIES : `near-places`}__image-wrapper place-card__image-wrapper`}>
          {/* eslint-disable-next-line react/prop-types */}
          <Link to={AppRoute.offer(offer.id)}>
            {/* eslint-disable-next-line react/prop-types */}
            <img className="place-card__image" src={`${offer.img}`} width="260" height="200" alt="Place image"/>
          </Link>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              {/* eslint-disable-next-line react/prop-types */}
              <b className="place-card__price-value">&euro;{offer.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button
              /* eslint-disable-next-line react/prop-types */
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
          {/* eslint-disable-next-line react/prop-types */}
          <Link to={AppRoute.offer(offer.id)}>
            <h2 className="place-card__name">
              {/* eslint-disable-next-line react/prop-types */}
              {offer.name}
            </h2>
          </Link>
          {/* eslint-disable-next-line react/prop-types */}
          <p className="place-card__type">{offer.type}</p>
        </div>
      </article>
    );
  }
}

// PlaceCard.propTypes = {
//   offer: PropTypes.shape({
//     isPremium: PropTypes.bool.isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     // eslint-disable-next-line camelcase
//     preview_image: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     rating: PropTypes.number.isRequired,
//   }).isRequired,
//   handleOfferHover: PropTypes.func,
//   cardClass: PropTypes.string,
// };

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
