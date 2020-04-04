import React from "react";
import renderer from "react-test-renderer";
import {LocationsListItem} from "./locations-list-item.jsx";
import {citiesMock} from "../../mocks/offers_for_test";

it(`Should LocationsListItem render correctly`, () => {
  const tree = renderer
    .create(
        <LocationsListItem
          activeCity={citiesMock[0]}
          city={citiesMock[0]}
          handleCityClick={()=>{}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
