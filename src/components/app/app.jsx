import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";


const App = (props) => {
  const advertsCount = props.advertsCount;
  const placesNames = props.placesNames;

  return (
    <Main
      advertsCount = {advertsCount}
      placesNames = {placesNames}
    />
  );
};

App.propTypes = {
  advertsCount: PropTypes.number.isRequired,
  placesNames: PropTypes.array.isRequired,
};


export default App;
