import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";


const placeNameHeaderHandler = () => {};

const App = (props) => {
  const {advertsCount, placesNames} = props;

  return (
    <Main
      advertsCount = {advertsCount}
      placesNames = {placesNames}
      onPlaceNameHeaderClick = {placeNameHeaderHandler}
    />
  );
};

App.propTypes = {
  advertsCount: PropTypes.number.isRequired,
  placesNames: PropTypes.arrayOf(
      PropTypes.string
  ).isRequired,
};


export default App;
