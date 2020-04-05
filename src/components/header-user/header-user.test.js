import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {HeaderUser} from "./header-user.jsx";
import {userPropertiesMock} from "../../mocks/offers_for_test";

it(`Should HeaderUser render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <HeaderUser
            authorizationStatus={`string`}
            userProperties={userPropertiesMock}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
