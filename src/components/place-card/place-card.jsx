import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);

  }


  render() {
    const {offer, handleCardHover} = this.props;
    const premium = <div className="place-card__mark">
      <span>Premium</span>
    </div>;

    let ratingStar = Math.round(offer.rating);

    switch (ratingStar) {
      case 1 : ratingStar = 20;
        break;
      case 2 : ratingStar = 40;
        break;
      case 3 : ratingStar = 60;
        break;
      case 4 : ratingStar = 80;
        break;
      case 5 : ratingStar = 100;
        break;
    }

    return (
      <article
        className="cities__place-card place-card"
        onMouseEnter={() => {
          handleCardHover(offer);
        }}
        onMouseLeave={() => {
          handleCardHover(null);
        }}
      >
        {offer.isPremium ? premium : null}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={offer.img} width="260" height="200" alt="Place image"/>
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
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
              <span style={{width: ratingStar + `%`}}/>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2
            className="place-card__name">
            <Link to={{pathname: `/offer`, state: offer}}>{offer.name}</Link>
          </h2>
          <p className="place-card__type">{offer.type}</p>
        </div>
      </article>
    );
  }
}

PlaceCard.propTypes = {
  offer: PropTypes.shape({
    isPremium: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
  handleCardHover: PropTypes.func.isRequired,
  onPlaceNameHeaderClick: PropTypes.func.isRequired,
};

export default PlaceCard;
