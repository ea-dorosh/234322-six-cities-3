import {reducer, ActionCreator} from "./main.js";
import {offerMock} from "../../mocks/offers_for_test";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    sortType: `Popular`,
    marker: null,
  });
});

it(`Reducer to sort offers `, () => {
  expect(reducer({
    sortType: `Popular`,
    marker: null,
  },
  ActionCreator.sortOffers(`SortType`)
  )).toEqual({
    sortType: `SortType`,
    marker: null,
  });
});

it(`Reducer highlight active offer marker on map `, () => {
  expect(reducer({
    sortType: `Popular`,
    marker: null,
  },
  ActionCreator.highlightMarker(offerMock)
  )).toEqual({
    sortType: `Popular`,
    marker: offerMock,
  });
});


