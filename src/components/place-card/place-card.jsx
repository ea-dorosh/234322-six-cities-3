import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import {ActionCreator} from "../../reducer/reducer";
import {connect} from "react-redux";

class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);

  }


  render() {
    const {offer, cardClass, handleOfferHover} = this.props;
    const premium = <div className="place-card__mark">
      <span>Premium</span>
    </div>;

    const ratingToStarMap = {1: 20, 2: 40, 3: 60, 4: 80, 5: 100};
    const ratingToStar = (rating) => ratingToStarMap[Math.round(rating)] || Math.round(rating);
    const rating = ratingToStar(offer.rating);

    return (
      <article
        className={`${cardClass === `cities` ? `cities__place-card` : `near-places__card`} place-card`}
        onMouseEnter={() => {
          handleOfferHover(offer);
        }}
        onMouseLeave={() => {
          handleOfferHover(null);
        }}
      >
        {offer.isPremium ? premium : null}
        <div className={`${cardClass === `cities` ? `cities` : `near-places`}__image-wrapper place-card__image-wrapper`}>
          {/* eslint-disable-next-line react/prop-types */}
          <Link to={`/offer/${offer.id}`}>
            <img className="place-card__image" src={`/${offer.img}`} width="260" height="200" alt="Place image"/>
          </Link>
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
              <span style={{width: rating + `%`}}/>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            {offer.name}
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
  handleOfferHover: PropTypes.func.isRequired,
  cardClass: PropTypes.string,
};


const mapStateToProps = () => {

};

const mapDispatchToProps = (dispatch) => ({

  handleOfferHover(offer) {
    dispatch(ActionCreator.highlightMarker(offer));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(PlaceCard);
