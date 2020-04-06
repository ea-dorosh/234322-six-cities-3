import React from "react";
import renderer from "react-test-renderer";
import {Router} from 'react-router-dom';
import {Provider} from "react-redux";
import DetailInfo from "./detail-info.jsx";
import {offerMock, offersMock} from "../../mocks/offers_for_test.js";
import {getCities} from "../../utils";
import NameSpace from "../../reducer/name-space";
import {LoadingOfferStatus} from "../../reducer/offers/offers";
import {AuthorizationStatus} from "../../reducer/user/user";
import {LoadingStatus} from "../../reducer/review/review";
import configureStore from "redux-mock-store";

const cities = getCities(offersMock);
const mockStore = configureStore([]);
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

it(`Should DetailInfo render correctly`, () => {
  const store = mockStore({
    [NameSpace.OFFERS]: {
      loadingOfferStatus: LoadingOfferStatus.PROCESSING,
      error: null,
      cities: [],
      activeCity: null,
      offers: [],
      nearOffers: [],
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userProperties: null,
    },
    [NameSpace.MAIN]: {
      sortType: `Popular`,
      marker: null,
    },
    [NameSpace.FAVORITE]: {
      favoriteStatus: ``,
    },
    [NameSpace.REVIEW]: {
      loadingStatus: LoadingStatus.SUCCESS,
      sendStatus: ``,
      offerReviews: [],
    },
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <DetailInfo
              offer={offerMock}
              otherOffers={offersMock}
              activeCity={cities[0]}
            />
          </Router>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
