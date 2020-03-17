import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";
import {SortType} from "../../utils.js";


class PlaceCardList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: null
    };

    this._handleCardHover = this._handleCardHover.bind(this);
    this._getSortedOffers = this._getSortedOffers.bind(this);
  }

  _getSortedOffers(offers, sortType) {
    switch (sortType) {
      case SortType.PRICE_TO_LOW:
        console.log(1)
        return offers.slice().sort((a, b) => b.price - a.price);
      case SortType.PRICE_TO_HIGH:
        console.log(2)
        return offers.slice().sort((a, b) => a.price - b.price);
      case SortType.TOP_RATED:
        console.log(3)
        return offers.slice().sort((a, b) => b.rating - a.rating);
    }
    return offers;
  }

  _handleCardHover(activeOffer) {
    this.setState({
      activeOffer
    });
  }

  render() {

    const {offers, listClass, activeCity, sortType} = this.props;
    // console.log(sortType)
    const sortedOffers = this._getSortedOffers(offers, sortType);

    return (
      <div className={`${listClass === `cities` ? `cities__places-list tabs__content` : `near-places__list`} places__list`}>
        {sortedOffers.map((it, index) => (
          <PlaceCard
            key={index}
            offer={it}
            handleCardHover={this._handleCardHover}
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
};

export default PlaceCardList;
