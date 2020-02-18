import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";

const offer = {name: `apartment-1 name string`, price: 50, img: `url path-1 string`};

it(`Should PlaceCard render correctly`, () => {
  const tree = renderer
    .create(<PlaceCard
      offer={offer}
      onPlaceNameHeaderClick={()=>{}}
      handleCardHover={()=>{}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
