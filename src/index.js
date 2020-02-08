import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  ADVERTS_COUNT: 36
};

const placesName = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Nice, cozy, warm big bed apartment`
];

ReactDOM.render(
    <App
      advertsCount = {Settings.ADVERTS_COUNT}
      placesName = {placesName}
    />,
    document.querySelector(`#root`)
);

