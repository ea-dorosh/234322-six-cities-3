import React from "react";
import renderer from "react-test-renderer";
import DetailInfo from "./detail-info.jsx";

const offer = {
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
};

it(`Should DetailInfo render correctly`, () => {
  const tree = renderer
    .create(<DetailInfo
      offer={offer}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
