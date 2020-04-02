import React, {PureComponent} from "react";
// import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import {AppRoute, CITIES, ratingToStar} from "../../utils.js";

class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);

    this._handleOfferHover = this._handleOfferHover.bind(this);
  }


  _handleOfferHover() {
    // eslint-disable-next-line react/prop-types
    if (this.props.handleOfferHover) {
      // eslint-disable-next-line react/prop-types
      this.props.handleOfferHover(this.props.offer);
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
            <button className="place-card__bookmark-button button" type="button">
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


export default PlaceCard;
