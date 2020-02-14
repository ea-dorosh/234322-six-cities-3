import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  ADVERTS_COUNT: 36
};


ReactDOM.render(
    <App
      advertsCount = {Settings.ADVERTS_COUNT}
    />,
    document.querySelector(`#root`)
);

