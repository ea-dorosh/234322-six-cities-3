import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";
import {offerMock} from "../../mocks/offers_for_test.js";

it(`Should PlaceCard render correctly`, () => {
  const tree = renderer
    .create(<PlaceCard
      offer={offerMock}
      onPlaceNameHeaderClick={()=>{}}
      handleCardHover={()=>{}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
