import React from "react";
import renderer from "react-test-renderer";
import DetailInfo from "./detail-info.jsx";
import {offerMock} from "../../mocks/offers_for_test.js";

it(`Should DetailInfo render correctly`, () => {
  const tree = renderer
    .create(<DetailInfo
      offer={offerMock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
