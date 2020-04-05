import React from "react";
import renderer from "react-test-renderer";
import {Main} from "./main.jsx";
import {citiesMock, offersMock} from "../../mocks/offers_for_test";

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(
        <Main
          activeCity={citiesMock[0]}
          offers={offersMock}
          marker={offersMock[0]}
          handleOfferHover={()=>{}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
