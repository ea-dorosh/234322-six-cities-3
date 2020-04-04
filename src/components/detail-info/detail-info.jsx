import React, {PureComponent} from "react";
// import PropTypes from "prop-types";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import {withRouter} from 'react-router-dom';
import Map from "../map/map.jsx";
import PlaceCardList from "../place-card-list/place-card-list.jsx";
import {connect} from "react-redux";
import {createSelector} from "reselect";
import {ratingToStar} from "../../utils.js";
import HeaderUser from "../header-user/header-user.jsx";
import CommentForm from "../comment-form/comment-form.jsx";
import {Operation as ReviewOperation} from "../../reducer/review/review.js";
import {Operation as OffersOperation} from "../../reducer/offers/offers.js";
import {getActiveCity, selectOffers, getNearOffers, getLoadStatus, getError} from "../../reducer/offers/selectors";
import {getUserProperties} from "../../reducer/user/selectors";
import {getReviews} from "../../reducer/review/selectors";
import withLoad from "../../hocs/withLoad/withLoad.jsx";


class DetailInfo extends PureComponent {
  constructor(props) {
    super(props);

    this.loadData = this.loadData.bind(this);
  }

  loadData() {
    // eslint-disable-next-line react/prop-types
    const {downloadNear, downloadReviews, offer} = this.props;

    // eslint-disable-next-line react/prop-types
    downloadNear(offer.id);
    // eslint-disable-next-line react/prop-types
    downloadReviews(offer.id);
  }

  componentDidMount() {
    this.loadData();
  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps) {
    // console.log(prevProps.offerReviews !== this.props.offerReviews)

    // if (prevProps.offerReviews !== this.props.offerReviews) {
    //   this.loadData();
    // }
    // prevProps.nearOffers !== this.props.nearOffers
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const {offer, userProperties, offerReviews, nearOffers, activeCity,
    } = this.props;

    const premium = <div className="property__mark">
      <span>Premium</span>
    </div>;

    // eslint-disable-next-line react/prop-types
    const rating = ratingToStar(offer.rating);

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
                <HeaderUser/>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {/* eslint-disable-next-line react/prop-types*/}
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
                    <span style={{width: rating + `%`}}/>
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
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{offerReviews.length}</span></h2>
                  <ReviewsList
                    /* eslint-disable-next-line react/prop-types */
                    reviews={offerReviews}
                  />
                  { userProperties ?
                    <CommentForm
                      /* eslint-disable-next-line react/prop-types */
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

// DetailInfo.propTypes = {
//   location: PropTypes.object
// };


const selectOfferById = createSelector([
  selectOffers,
  (state, id) => id
], (offers, id) => offers.find((offer) => offer.id === id)
);

const mapStateToProps = (state, ownProps) => {

  const offerId = Number(ownProps.match.params.id);

  return {
    offer: selectOfferById(state, offerId),
    activeCity: getActiveCity(state),
    userProperties: getUserProperties(state),
    offerReviews: getReviews(state),
    nearOffers: getNearOffers(state),
  };
};

const mapDispatchToProps = (dispatch) => ({

  downloadReviews(id) {
    dispatch(ReviewOperation.getReviews(id));
  },

  downloadNear(id) {
    dispatch(OffersOperation.downloadNearOffers(id));
  }
});

export default withRouter(withLoad(connect(mapStateToProps, mapDispatchToProps)(DetailInfo), getLoadStatus, getError));

// 1.
