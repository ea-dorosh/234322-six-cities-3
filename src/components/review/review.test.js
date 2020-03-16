import React from "react";
import renderer from "react-test-renderer";
import Review from "./review.jsx";
import {offerMock} from "../../mocks/offers_for_test.js";


it(`Should Review render correctly`, () => {
  const tree = renderer
    .create(<Review
      review={offerMock.reviews[0]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

