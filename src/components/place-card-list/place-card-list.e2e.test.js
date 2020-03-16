import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCardList from "./place-card-list.jsx";
import {offersMock} from "../../mocks/offers_for_test";
import {MemoryRouter as Router} from 'react-router-dom';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should change state when offer onHover`, () => {

  const placeCardList = mount(
      <Router>
        <PlaceCardList
          offers = {offersMock}
        />
      </Router>
  );

  const cardOffer = placeCardList.find(`.place-card`);

  cardOffer.at(1).simulate(`mouseenter`);
  expect(placeCardList.find(PlaceCardList).state().activeOffer).toBe(offersMock[1]);
});
