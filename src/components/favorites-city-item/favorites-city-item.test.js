import React from "react";
import renderer from "react-test-renderer";
import FavoritesCityItem from "./favorites-city-item.jsx";
import {offersMock, citiesMock} from "../../mocks/offers_for_test";

it(`Should FavoritesCityItem render correctly`, () => {
  const tree = renderer
    .create(
        <FavoritesCityItem
          offers={offersMock}
          city={citiesMock[0]}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
