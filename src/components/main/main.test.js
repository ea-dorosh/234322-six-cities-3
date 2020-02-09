import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      advertsCount={15}
      placesNames={[`array`, `of`, `strings`]}
      onPlaceNameHeaderClick={()=>{}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
