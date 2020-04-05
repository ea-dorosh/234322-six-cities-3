import React from "react";
import renderer from "react-test-renderer";
import Map from "../map/map.jsx";
import {offersMock, offerMock} from "../../mocks/offers_for_test";
import {getCities} from "../../utils";

const cities = getCities(offersMock);

it(`Should Map render correctly`, () => {
  const tree = renderer
    .create(<Map
      offers={offersMock}
      activeOffer={offerMock}
      activeCity={cities[0]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

