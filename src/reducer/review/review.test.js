import {reducer, ActionCreator} from "./review.js";

const mockReviews = [
  {
    id: 1,
    comment: `some information about offer, some information about offer`,
    rating: 3.4,
    user: {
      name: `Konstantin`,
      avatarUrl: `avatar.jpg`
    },
    date: `2019-04-24`,
  },
  {
    id: 2,
    text: `some information about offer, some information about offer`,
    rating: 3.4,
    user: {
      name: `Konstantin`,
      avatarUrl: `avatar.jpg`
    },
    date: `2019-04-24`,
  },
];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    loadingStatus: ``,
    offerReviews: [],
  });
});

it(`Reducer change loading status `, () => {
  expect(reducer({
    loadingStatus: ``,
    offerReviews: [],
  },
  ActionCreator.changeLoadingStatus(`status`)
  )).toEqual({
    loadingStatus: `status`,
    offerReviews: [],
  });
});

it(`Reducer get offer reviews`, () => {
  expect(reducer({
    loadingStatus: ``,
    offerReviews: [],
  },
  ActionCreator.getOfferReviews(mockReviews)
  )).toEqual({
    loadingStatus: ``,
    offerReviews: mockReviews,
  });
});
