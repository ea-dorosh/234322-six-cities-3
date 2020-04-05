import {reducer, ActionCreator} from "./favorites.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    favoriteStatus: ``,
  });
});

it(`Reducer add to favorite status `, () => {
  expect(reducer({
    favoriteStatus: ``,
  },
  ActionCreator.changeAddStatus(`SUCCESS`)
  )).toEqual({
    favoriteStatus: `SUCCESS`,
  });
});


