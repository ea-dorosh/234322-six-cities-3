import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";
import {SortType} from "../../utils.js";


class PlaceCardList extends PureComponent {
  constructor(props) {
    super(props);

    this._getSortedOffers = this._getSortedOffers.bind(this);
  }

  _getSortedOffers(offers, sortType) {
    switch (sortType) {
      case SortType.PRICE_TO_LOW:
        return offers.slice().sort((a, b) => b.price - a.price);
      case SortType.PRICE_TO_HIGH:
        return offers.slice().sort((a, b) => a.price - b.price);
      case SortType.TOP_RATED:
        return offers.slice().sort((a, b) => b.rating - a.rating);
    }
    return offers;
  }

  render() {

    const {offers, listClass, activeCity, sortType, handleOfferHover} = this.props;
    const sortedOffers = this._getSortedOffers(offers, sortType);

    return (
      <div className={`${listClass === `cities` ? `cities__places-list tabs__content` : `near-places__list`} places__list`}>
        {sortedOffers.map((it, index) => (
          <PlaceCard
            key={index}
            offer={it}
            handleOfferHover={handleOfferHover}
            otherOffers={offers}
            cardClass={listClass}
            activeCity={activeCity}
          />
        ))}
      </div>
    );
  }
}

PlaceCardList.propTypes = {
  offers: PropTypes.array.isRequired,
  listClass: PropTypes.string,
  activeCity: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired
    }),
    name: PropTypes.string.isRequired,
  }).isRequired,
  sortType: PropTypes.string.isRequired,
};

export default PlaceCardList;
