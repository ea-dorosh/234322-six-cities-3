import React from "react";
import renderer from "react-test-renderer";
import {LocationsList} from "./locations-list.jsx";
import {citiesMock} from "../../mocks/offers_for_test";

it(`Should LocationsList render correctly`, () => {
  const tree = renderer
    .create(
        <LocationsList
          cities={citiesMock}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
