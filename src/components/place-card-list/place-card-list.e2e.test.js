import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCardList from "./place-card-list.jsx";
import {offersMock, SortTypeMock} from "../../mocks/offers_for_test";
import {MemoryRouter as Router} from 'react-router-dom';
import {getCities} from "../../utils";

Enzyme.configure({
  adapter: new Adapter(),
});

const cities = getCities(offersMock);

it(`Should change state when offer onHover`, () => {

  const placeCardList = mount(
      <Router>
        <PlaceCardList
          offers = {offersMock}
          activeCity={cities[0]}
          sortType={SortTypeMock.POPULAR}
        />
      </Router>
  );

  const cardOffer = placeCardList.find(`.place-card`);

  cardOffer.at(1).simulate(`mouseenter`);
  expect(placeCardList.find(PlaceCardList).state().activeOffer).toBe(offersMock[1]);
});
