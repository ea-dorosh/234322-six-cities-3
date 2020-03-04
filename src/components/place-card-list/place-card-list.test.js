import React from "react";
import renderer from "react-test-renderer";
import PlaceCardList from "./place-card-list.jsx";
import {offersMock} from "../../mocks/offers_for_test.js";


it(`Should PlaceCardList render correctly`, () => {
  const tree = renderer
    .create(<PlaceCardList
      offers={offersMock}
      onPlaceNameHeaderClick={()=>{}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
