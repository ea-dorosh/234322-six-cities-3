import {reducer, ActionCreator} from "./user.js";

const userData = {
  name: `string`,
  eMail: `string@email.ua`,
  id: 15
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    authorizationStatus: `NO_AUTH`,
    userProperties: null,
  });
});

it(`Reducer change authorization status `, () => {
  expect(reducer({
    authorizationStatus: `NO_AUTH`,
    userProperties: null,
  },
  ActionCreator.requireAuthorization(`AUTH`)
  )).toEqual({
    authorizationStatus: `AUTH`,
    userProperties: null,
  });
});

it(`Reducer get user data info`, () => {
  expect(reducer({
    authorizationStatus: `NO_AUTH`,
    userProperties: null,
  },
  ActionCreator.getUserProperties(userData)
  )).toEqual({
    authorizationStatus: `NO_AUTH`,
    userProperties: userData,
  });
});
