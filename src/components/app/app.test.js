import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const offers = [
  {
    name: `apartment-1 name string`,
    price: 50,
    img: `url path-1 string`,
    isPremium: true,
    type: `string`,
    rating: 4.0,
    photos: [`path-1 string`, `path-2 string`],
    description: `just sting`,
    bedRoomQuantity: 2,
    maxGuestQuantity: 4,
    details: [`detail-1 string`, `detail-2 string`],
    holder: {
      holderName: `just sting`,
      img: `path sting`,
      isSuper: true,
    }
  },
  {
    name: `apartment-1 name string`,
    price: 50,
    img: `url path-1 string`,
    isPremium: true,
    type: `string`,
    rating: 4.0,
    photos: [`path-1 string`, `path-2 string`],
    description: `just sting`,
    bedRoomQuantity: 2,
    maxGuestQuantity: 4,
    details: [`detail-1 string`, `detail-2 string`],
    holder: {
      holderName: `just sting`,
      img: `path sting`,
      isSuper: true,
    }
  }
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
