import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {createOffers} from "./mocks/offers.js";

const OFFERS_QUANTITY = 4;

const Settings = {
  ADVERTS_COUNT: 36
};

const offers = createOffers(OFFERS_QUANTITY);


ReactDOM.render(
    <App
      advertsCount = {Settings.ADVERTS_COUNT}
      offers = {offers}
    />,
    document.querySelector(`#root`)
);

