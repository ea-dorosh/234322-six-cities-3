import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {createOffers} from "./mocks/offers.js";

const OFFERS_QUANTITY = 8;

const Settings = {
  ADVERTS_COUNT: OFFERS_QUANTITY
};

const offers = createOffers(OFFERS_QUANTITY);
console.log(offers)

ReactDOM.render(
    <App
      advertsCount = {Settings.ADVERTS_COUNT}
      offers = {offers}
    />,
    document.querySelector(`#root`)
);

