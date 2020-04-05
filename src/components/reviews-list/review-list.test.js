import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list.jsx";
import {offersMock} from "../../mocks/offers_for_test.js";


it(`Should ReviewsList render correctly`, () => {
  const tree = renderer
    .create(
        <ReviewsList
          reviews={offersMock[0].reviews}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

