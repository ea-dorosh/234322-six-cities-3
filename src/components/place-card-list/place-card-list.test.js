import React from "react";
import renderer from "react-test-renderer";
import PlaceCardList from "./place-card-list.jsx";
import {offersMock} from "../../mocks/offers_for_test";
import {MemoryRouter as Router} from 'react-router-dom';
import {getCities} from "../../utils";

const cities = getCities(offersMock);
const offers = offersMock;

it(`Should PlaceCardList render correctly`, () => {
  const tree = renderer
    .create(
        <Router>
          <PlaceCardList
            offers={offers}
            activeCity={cities[0]}
            handleOfferHover={()=>{}}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
