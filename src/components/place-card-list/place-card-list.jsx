import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";
import {SortType} from "../../utils.js";
import {connect} from "react-redux";
import {createSelector} from "reselect";
import {CITIES} from "../../utils.js";


class PlaceCardList extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {

    // eslint-disable-next-line react/prop-types
    const {offers, listClass, nearOffers} = this.props;

    const array = nearOffers ? nearOffers : offers;

    return (
      <div className={`${listClass === CITIES ? `cities__places-list tabs__content` : `near-places__list`} places__list`}>
        {array.map((it, index) => (
          <PlaceCard
            key={index}
            offer={it}
            cardClass={listClass}
          />
        ))}
      </div>
    );
  }
}

PlaceCardList.propTypes = {
  offers: PropTypes.array.isRequired,
  listClass: PropTypes.string,
  sortType: PropTypes.string,
};

function selectOffers(state) {
  return state.offers;
}

function getSortedOffers(offers, sortType) {
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

const sortOffersBySortType = createSelector([
  selectOffers,
  (state, sortType) => sortType
], (offers, sortType) => getSortedOffers(offers, sortType)
);


const mapStateToProps = (state) => {
  return {
    offers: sortOffersBySortType(state, state.sortType),
  };
};

export default connect(mapStateToProps)(PlaceCardList);
