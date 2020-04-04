import React from "react";
import renderer from "react-test-renderer";
import {DetailInfo} from "./detail-info.jsx";
import {offerMock} from "../../mocks/offers_for_test";

it(`Should DetailInfo render correctly`, () => {
  const tree = renderer
    .create(
        <DetailInfo
          downloadNear={()=>{}}
          downloadReviews={()=>{}}
          offer={offerMock}
          authorizationStatus={`string`}
          handleFavoriteStatus={()=>{}}
          activeCity={offerMock.location}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
