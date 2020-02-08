import React from "react";
import Main from "../main/main.jsx";


const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const advertsCount = props.advertsCount;
  // eslint-disable-next-line react/prop-types
  const placesName = props.placesName;

  return (
    <Main
      advertsCount = {advertsCount}
      placesName = {placesName}
    />
  );
};


export default App;
