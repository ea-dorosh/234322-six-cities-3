import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list.jsx";
import {getRandomNumber} from "../../utils";

const review = {
  text: `some information about offer, some information about offer`,
  rating: parseFloat(`${getRandomNumber(2, 4)}.${getRandomNumber(0, 9)}`),
  name: `Kostya`,
  date: `2017-05-26`,
  id: 2,
};

it(`Should ReviewsList render correctly`, () => {
  const tree = renderer
    .create(<ReviewsList
      review={review}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

