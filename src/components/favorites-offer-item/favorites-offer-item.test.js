import React from "react";
import renderer from "react-test-renderer";
import FavoritesOfferItem from "./favorites-offer-item";
import {offerMock} from "../../mocks/offers_for_test";

it(`Should FavoritesCityItem render correctly`, () => {
  const tree = renderer
    .create(
        <FavoritesOfferItem
          offer={offerMock}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
