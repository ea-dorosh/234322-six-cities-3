import React, {PureComponent} from "react";
// import PropTypes from "prop-types";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import {withRouter} from 'react-router-dom';
import Map from "../map/map.jsx";
import PlaceCardList from "../place-card-list/place-card-list.jsx";
import {connect} from "react-redux";
import {createSelector} from "reselect";

class DetailInfo extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    // eslint-disable-next-line react/prop-types
    const {offer, nearOffers, activeCity} = this.props;

    const premium = <div className="property__mark">
      <span>Premium</span>
    </div>;

    // eslint-disable-next-line react/prop-types
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

    // eslint-disable-next-line react/prop-types
    const avatarClasses = `property__avatar-wrapper user__avatar-wrapper ${offer.holder.isSuper ? `property__avatar-wrapper--pro` : null}`;

    return (
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="main.html">
                  <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </a>
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
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {/* eslint-disable-next-line react/prop-types */}
                {offer.photos.map((it, index) => (
                  <div className="property__image-wrapper" key={index}>
                    <img
                      className="property__image"
                      src={`/${it}`}
                      alt="Photo studio"/>
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {/* eslint-disable-next-line react/prop-types */}
                {offer.isPremium ? premium : null}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {/* eslint-disable-next-line react/prop-types */}
                    {offer.name}
                  </h1>
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"/>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: ratingStar + `%`}}/>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  {/* eslint-disable-next-line react/prop-types */}
                  <span className="property__rating-value rating__value">{offer.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {/* eslint-disable-next-line react/prop-types */}
                    {offer.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {/* eslint-disable-next-line react/prop-types */}
                    {offer.bedRoomQuantity} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    {/* eslint-disable-next-line react/prop-types */}
                    Max {offer.maxGuestQuantity} adults
                  </li>
                </ul>
                <div className="property__price">
                  {/* eslint-disable-next-line react/prop-types */}
                  <b className="property__price-value">&euro;{offer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {/* eslint-disable-next-line react/prop-types */}
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
                      {/* eslint-disable-next-line react/prop-types */}
                      <img className="property__avatar user__avatar" src={`/${offer.holder.img}`} width="74" height="74"
                        alt="Host avatar"/>
                    </div>
                    <span className="property__user-name">
                      {/* eslint-disable-next-line react/prop-types */}
                      {offer.holder.holderName}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {/* eslint-disable-next-line react/prop-types */}
                      {offer.description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  {/* eslint-disable-next-line react/prop-types */}
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{offer.reviews.length}</span></h2>
                  <ReviewsList
                    /* eslint-disable-next-line react/prop-types */
                    reviews={offer.reviews}
                  />
                  <form className="reviews__form form" action="#" method="post">
                    <label className="reviews__label form__label" htmlFor="review">Your review</label>
                    <div className="reviews__rating-form form__rating">
                      <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars"
                        type="radio"/>
                      <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                        <svg className="form__star-image" width="37" height="33">
                          <use xlinkHref="#icon-star"/>
                        </svg>
                      </label>

                      <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars"
                        type="radio"/>
                      <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                        <svg className="form__star-image" width="37" height="33">
                          <use xlinkHref="#icon-star"/>
                        </svg>
                      </label>

                      <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars"
                        type="radio"/>
                      <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                        <svg className="form__star-image" width="37" height="33">
                          <use xlinkHref="#icon-star"/>
                        </svg>
                      </label>

                      <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars"
                        type="radio"/>
                      <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                        <svg className="form__star-image" width="37" height="33">
                          <use xlinkHref="#icon-star"/>
                        </svg>
                      </label>

                      <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star"
                        type="radio"/>
                      <label htmlFor="1-star" className="reviews__rating-label form__rating-label"
                        title="terribly">
                        <svg className="form__star-image" width="37" height="33">
                          <use xlinkHref="#icon-star"/>
                        </svg>
                      </label>
                    </div>
                    <textarea className="reviews__textarea form__textarea" id="review" name="review"
                      placeholder="Tell how was your stay, what you like and what can be improved"/>
                    <div className="reviews__button-wrapper">
                      <p className="reviews__help">
                        To submit review please make sure to set <span className="reviews__star">rating</span> and describe
                        your stay with at least <b className="reviews__text-amount">50 characters</b>.
                      </p>
                      <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
                    </div>
                  </form>
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
                nearOffers={nearOffers}
              />
            </section>
          </div>
        </main>
      </div>
    );
  }
}

// DetailInfo.propTypes = {
//   location: PropTypes.object
// };

function selectOffers(state) {
  return state.offers;
}

const selectOfferById = createSelector([
  selectOffers,
  (state, id) => id
], (offers, id) => offers.find((offer) => offer.id === id)
);

const findNearOffers = createSelector([
  selectOffers,
  (state, id) => id
],
(offers, id) => offers.filter((otherOffer) => {return otherOffer.id !== id})
);

const mapStateToProps = (state, ownProps) => {

  const offerId = Number(ownProps.match.params.id);

  return {
    offer: selectOfferById(state, offerId),
    activeCity: state.activeCity,
    nearOffers: findNearOffers(state, offerId),
  };
};

export default withRouter(connect(mapStateToProps)(DetailInfo));
