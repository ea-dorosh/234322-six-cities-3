import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";
import {offerMock, offersMock} from "../../mocks/offers_for_test.js";
import {MemoryRouter as Router} from 'react-router-dom';
import {getCities} from "../../utils";

const cities = getCities(offersMock);

it(`Should PlaceCard render correctly`, () => {
  const tree = renderer
    .create(
        <Router>
          <PlaceCard
            offer={offerMock}
            handleCardHover={()=>{}}
            otherOffers={offersMock}
            activeCity={cities[0]}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
