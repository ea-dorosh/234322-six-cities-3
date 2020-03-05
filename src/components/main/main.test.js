import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {offersMock} from "../../mocks/offers_for_test.js";


it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      advertsCount={15}
      offers={offersMock}
      onPlaceNameHeaderClick={()=>{}}
      classNames={`string of classes`}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

