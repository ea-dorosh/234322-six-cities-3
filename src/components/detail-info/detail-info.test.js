import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter as Router} from 'react-router-dom';
import DetailInfo from "./detail-info.jsx";
import {offerMock, offersMock} from "../../mocks/offers_for_test.js";
import {getCities} from "../../utils";

const cities = getCities(offersMock);

it(`Should DetailInfo render correctly`, () => {
  const tree = renderer
    .create(<Router initialEntries={[{to: `/в`, state: {offer: offerMock, otherOffers: offersMock, activeCity: cities[0]}}]}>
      <DetailInfo
        offer={offerMock}
        otherOffers={offersMock}
        activeCity={cities[0]}
      />
    </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
