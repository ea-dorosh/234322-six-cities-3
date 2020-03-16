import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {offersMock} from "../../mocks/offers_for_test.js";

it(`Should App render correctly`, () => {
  const tree = renderer
    .create(<App
      advertsCount={15}
      offers={offersMock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
