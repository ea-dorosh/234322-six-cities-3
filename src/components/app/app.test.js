import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const offers = [
  {name: `apartment-1 name string`, price: 50, img: `url path-1 string`, isPremium: true, type: `string`, rating: 4.0},
  {name: `apartment-2 name string`, price: 250, img: `url path-2 string`, isPremium: true, type: `string`, rating: 4.0},
  {name: `apartment-3 name string`, price: 500, img: `url path-3 string`, isPremium: true, type: `string`, rating: 4.0}
];

it(`Should App render correctly`, () => {
  const tree = renderer
    .create(<App
      advertsCount={15}
      offers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
