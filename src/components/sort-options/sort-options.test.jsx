import React from "react";
import renderer from "react-test-renderer";
import {SortOptions} from "./sort-options.jsx";

it(`Should SortOptions render correctly`, () => {
  const tree = renderer
    .create(
        <SortOptions
          sortType={`string`}
          handleOffersSort={()=>{}}
          handleToggleClick={()=>{}}
          isOpened={true}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
