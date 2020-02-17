import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";


const placeNameHeaderHandler = () => {};

const App = (props) => {
  const {advertsCount, offers} = props;

  return (
    <Main
      advertsCount = {advertsCount}
      onPlaceNameHeaderClick = {placeNameHeaderHandler}
      offers = {offers}
    />
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired
      })
  ).isRequired,
  advertsCount: PropTypes.number.isRequired,
};


export default App;
