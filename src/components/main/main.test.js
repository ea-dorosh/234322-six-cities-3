import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {offersMock, SortTypeMock} from "../../mocks/offers_for_test.js";
import {MemoryRouter as Router} from 'react-router-dom';
import {getCities} from "../../utils.js";
import PlaceCardList from "../place-card-list/place-card-list";


const cities = getCities(offersMock);

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(
        <Router>
          <Main
            advertsCount={15}
            offers={offersMock}
            classNames={`string of classes`}
            cities={cities}
            activeCity={cities[0]}
            handleCityClick={()=>{}}
            sortType={SortTypeMock.POPULAR}
            handleOffersSort={()=>{}}
          />
        </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

