import React from "react";
import renderer from "react-test-renderer";
import PlaceCardList from "./place-card-list.jsx";
import {offersMock} from "../../mocks/offers_for_test.js";
import {MemoryRouter as Router} from 'react-router-dom';


it(`Should PlaceCardList render correctly`, () => {
  const tree = renderer
    .create(
        <Router>
          <PlaceCardList
            offers={offersMock}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
