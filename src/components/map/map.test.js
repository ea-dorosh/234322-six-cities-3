import React from "react";
import renderer from "react-test-renderer";
import Map from "../map/map.jsx";
import {offersMock} from "../../mocks/offers_for_test";


it(`Should Map render correctly`, () => {
  const tree = renderer
    .create(<Map
      offers={offersMock}
      activeOffer={}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

