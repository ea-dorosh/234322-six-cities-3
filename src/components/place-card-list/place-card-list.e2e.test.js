import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCardList from "./place-card-list.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should change state when offer onHover`, () => {
  const onPlaceNameHeaderClick = jest.fn();
  const offers = [
    {name: `apartment-1 name string`, price: 50, img: `url path-1 string`, isPremium: true, type: `string`, rating: 4.0},
    {name: `apartment-2 name string`, price: 250, img: `url path-2 string`, isPremium: true, type: `string`, rating: 4.0},
    {name: `apartment-3 name string`, price: 500, img: `url path-3 string`, isPremium: true, type: `string`, rating: 4.0}
  ];

  const placeCardList = mount(
      <PlaceCardList
        offers = {offers}
        onPlaceNameHeaderClick = {onPlaceNameHeaderClick}
      />
  );

  const cardOffer = placeCardList.find(`.place-card`);

  cardOffer.at(1).simulate(`mouseenter`);
  expect(placeCardList.state().activeOffer).toBe(offers[1]);
});
