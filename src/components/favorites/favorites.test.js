import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import {Favorites} from "./favorites.jsx";
import {offersMock, citiesMock} from "../../mocks/offers_for_test";

const history = {
  length: 33,
  action: `PUSH`,
  location: {
    pathname: `/login`,
    search: ``,
    hash: ``,
    state: undefined,
    key: `tc3g2a`},
  listen: ()=>{},
  createHref: ()=>{},
};

it(`Should Favorites render correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <Favorites
            offers={offersMock}
            authorizationStatus={`string`}
            cities={citiesMock}
            key={2}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
