import React from "react";
import renderer from "react-test-renderer";
import MainEmpty from "./main-emty.jsx";
import {citiesMock} from "../../mocks/offers_for_test";

it(`Should MainEmpty render correctly`, () => {
  const tree = renderer
    .create(
        <MainEmpty
          activeCity={citiesMock[0]}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
