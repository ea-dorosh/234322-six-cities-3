import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should Place Name Header be pressed`, () => {
  const onPlaceNameHeaderClick = jest.fn();
  const offer = {name: `apartment-1 name string`, price: 50, img: `url path-1 string`, isPremium: true, type: `string`, rating: 4.0};

  const placeCard = shallow(
      <PlaceCard
        offer={offer}
        onPlaceNameHeaderClick={onPlaceNameHeaderClick}
        handleCardHover={()=>{}}
      />
  );

  const placeNameHeaderButton = placeCard.find(`h2.place-card__name`);

  placeNameHeaderButton.props().onClick();

  expect(onPlaceNameHeaderClick.mock.calls.length).toBe(1);
});

