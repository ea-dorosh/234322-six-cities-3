import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";
import {CITIES} from "../../utils.js";


class PlaceCardList extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {

    const {offers, listClass, handleOfferHover} = this.props;

    return (
      <div className={`${listClass === CITIES ? `cities__places-list tabs__content` : `near-places__list`} places__list`}>
        {offers.map((offer, index) => (
          <PlaceCard
            key={index}
            offer={offer}
            cardClass={listClass}
            handleOfferHover={handleOfferHover}
          />
        ))}
      </div>
    );
  }
}

PlaceCardList.propTypes = {
  offers: PropTypes.array,
  listClass: PropTypes.string,
  handleOfferHover: PropTypes.func,
};


export default PlaceCardList;
