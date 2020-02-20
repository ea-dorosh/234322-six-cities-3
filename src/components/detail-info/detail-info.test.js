import React from "react";
import renderer from "react-test-renderer";
import DetailInfo from "./detail-info.jsx";

const offer = {name: `apartment-1 name string`, price: 50, img: `url path-1 string`, isPremium: true, type: `string`, rating: 4.0};

it(`Should DetailInfo render correctly`, () => {
  const tree = renderer
    .create(<DetailInfo
      offer={offer}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
