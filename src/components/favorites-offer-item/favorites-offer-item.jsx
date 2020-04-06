import React, {PureComponent} from "react";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {AppRoute, ratingToStar} from "../../utils";
import {Operation as FavoriteOperation} from "../../reducer/favorites/favorites";
import {Operation as OffersOperation} from "../../reducer/offers/offers";
import {connect} from "react-redux";


class FavoritesOfferItem extends PureComponent {
  constructor(props) {
    super(props);

    this._toFavoritesHandler = this._toFavoritesHandler.bind(this);
  }

  _toFavoritesHandler() {
    const {offer, handleFavoriteStatus} = this.props;

    const status = offer.isFavorite ? 0 : 1;
    handleFavoriteStatus(status, this.props.offer.id);

  }

  render() {
    const {offer} = this.props;

    const rating = ratingToStar(offer.rating);

    return (

      <article className="favorites__card place-card">
        <div className="favorites__image-wrapper place-card__image-wrapper">
          <Link to={AppRoute.offer(offer.id)}>
            <img className="place-card__image" src={offer.img} width="150" height="110"
              alt="Place image"/>
          </Link>
        </div>
        <div className="favorites__card-info place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">{offer.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button
              className="place-card__bookmark-button place-card__bookmark-button--active button"
              type="button"
              onClick={this._toFavoritesHandler}
            >
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"/>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: rating + `%`}}/>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to={AppRoute.offer(offer.id)} href="#">{offer.name}</Link>
          </h2>
          <p className="place-card__type">{offer.type}</p>
        </div>
      </article>
    );
  }
}

FavoritesOfferItem.propTypes = {
  offer: PropTypes.shape({
    rating: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }),
  handleFavoriteStatus: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {

  return {
    state
  };
};

const mapDispatchToProps = (dispatch) => ({

  handleFavoriteStatus(status, id) {
    dispatch(FavoriteOperation.addToFavorite(status, id));
    dispatch(OffersOperation.refreshOffers());
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesOfferItem);
