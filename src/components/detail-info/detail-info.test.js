import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter as Router} from 'react-router-dom';
import DetailInfo from "./detail-info.jsx";
import {offerMock, offersMock} from "../../mocks/offers_for_test.js";

it(`Should DetailInfo render correctly`, () => {
  const tree = renderer
    .create(<Router initialEntries={[{to: `/в`, state: {offer: offerMock, otherOffers: offersMock}}]}><DetailInfo
      offer={offerMock}
      otherOffers={offersMock}
    /></Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
