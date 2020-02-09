import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";

it(`Should PlaceCard render correctly`, () => {
  const tree = renderer
    .create(<PlaceCard
      placesNames={`some string`}
      onPlaceNameHeaderClick={()=>{}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
