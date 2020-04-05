import React from "react";
import renderer from "react-test-renderer";
import {SignIn} from "./sign-in.jsx";
import {MemoryRouter as Router} from 'react-router-dom';

it(`Should SignIn render correctly`, () => {
  const tree = renderer
    .create(
        <Router>
          <SignIn
            authorizationStatus={`string`}
            login={()=>{}}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
