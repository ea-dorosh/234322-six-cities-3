import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";

const PlaceCardList = (props) => {
  const {offers, onPlaceNameHeaderClick} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((it, index) => (
        <PlaceCard
          key={index}
          offer = {it}
          onPlaceNameHeaderClick = {onPlaceNameHeaderClick}
        />
      ))}
    </div>
  );
};

PlaceCardList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired
      })
  ).isRequired,
  onPlaceNameHeaderClick: PropTypes.func.isRequired,
};

export default PlaceCardList;
