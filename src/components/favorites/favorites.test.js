import React from "react";
import renderer from "react-test-renderer";
import {Favorites} from "./favorites.jsx";
import {offersMock, citiesMock} from "../../mocks/offers_for_test";

it(`Should Favorites render correctly`, () => {
  const tree = renderer
    .create(
        <Favorites
          offers={offersMock}
          authorizationStatus={`string`}
          cities={citiesMock}
          key={2}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
