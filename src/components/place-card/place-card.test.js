import React from "react";
import renderer from "react-test-renderer";
import {PlaceCard} from "./place-card.jsx";
import {offerMock} from "../../mocks/offers_for_test";
import {MemoryRouter as Router} from 'react-router-dom';

it(`Should PlaceCard render correctly`, () => {
  const tree = renderer
    .create(
        <Router>
          <PlaceCard
            downloadNear={()=>{}}
            downloadReviews={()=>{}}
            offer={offerMock}
            authorizationStatus={`string`}
            handleFavoriteStatus={()=>{}}
            activeCity={offerMock.location}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
