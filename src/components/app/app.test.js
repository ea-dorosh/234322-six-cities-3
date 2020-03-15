import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {offersMock} from "../../mocks/offers_for_test.js";
import {getCities} from "../../utils";

const cities = getCities(offersMock);

it(`Should App render correctly`, () => {
  const tree = renderer
    .create(<App
      advertsCount={15}
      offers={offersMock}
      activeCity={cities[0]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
