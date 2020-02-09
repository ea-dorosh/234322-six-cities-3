import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

it(`Should App render correctly`, () => {
  const tree = renderer
    .create(<App
      advertsCount={15}
      placesNames={[`array`, `of`, `string`]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
