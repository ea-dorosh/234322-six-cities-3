import React from "react";
import renderer from "react-test-renderer";
import PlaceCardList from "./place-card-list.jsx";

const offers = [
  {name: `apartment-1 name string`, price: 50, img: `url path-1 string`},
  {name: `apartment-2 name string`, price: 250, img: `url path-2 string`},
  {name: `apartment-3 name string`, price: 500, img: `url path-3 string`}
];


it(`Should PlaceCardList render correctly`, () => {
  const tree = renderer
    .create(<PlaceCardList
      offers={offers}
      onPlaceNameHeaderClick={()=>{}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
