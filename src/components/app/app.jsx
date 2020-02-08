import React from "react";
import Main from "../main/main.jsx";


const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const advertsCount = props.advertsCount;
  // eslint-disable-next-line react/prop-types
  const placesName = props.placesNames;
  console.log(placesName)

  return (
    <Main
      advertsCount = {advertsCount}
      placeName = {placesName}
    />
  );
};


export default App;
