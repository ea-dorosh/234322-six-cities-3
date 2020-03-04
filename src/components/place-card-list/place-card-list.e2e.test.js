import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCardList from "./place-card-list.jsx";
import {offersMock} from "../../mocks/offers_for_test";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should change state when offer onHover`, () => {
  const onPlaceNameHeaderClick = jest.fn();

  const placeCardList = mount(
      <PlaceCardList
        offers = {offersMock}
        onPlaceNameHeaderClick = {onPlaceNameHeaderClick}
      />
  );

  const cardOffer = placeCardList.find(`.place-card`);

  cardOffer.at(1).simulate(`mouseenter`);
  expect(placeCardList.state().activeOffer).toBe(offersMock[1]);
});
