import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const {offer, onPlaceNameHeaderClick} = this.props;
    const {} = this.state;

    return (
      <article className="cities__place-card place-card">
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
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
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2
            onClick={onPlaceNameHeaderClick}
            className="place-card__name">
            <a href="#">{offer.name}</a>
          </h2>
          <p className="place-card__type">Apartment</p>
        </div>
      </article>
    );
  }
}

PlaceCard.propTypes = {
  offer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired
  }).isRequired,
  onPlaceNameHeaderClick: PropTypes.func.isRequired,
};

export default PlaceCard;
