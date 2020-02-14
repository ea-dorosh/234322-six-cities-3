import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import {createOffers} from "../../mocks/offers";

const OFFERS_QUANTITY = 4;

const offers = createOffers(OFFERS_QUANTITY);

const placeNameHeaderHandler = () => {};

const App = (props) => {
  const {advertsCount} = props;

  return (
    <Main
      advertsCount = {advertsCount}
      onPlaceNameHeaderClick = {placeNameHeaderHandler}
      offers = {offers}
    />
  );
};

App.propTypes = {
  advertsCount: PropTypes.number.isRequired,
};


export default App;
