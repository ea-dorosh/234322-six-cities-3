import React from "react";
import renderer from "react-test-renderer";
import {Router} from 'react-router-dom';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import PlaceCardList from "./place-card-list.jsx";
import {offersMock} from "../../mocks/offers_for_test";
import NameSpace from "../../reducer/name-space";
import {LoadingOfferStatus} from "../../reducer/offers/offers";
import {AuthorizationStatus} from "../../reducer/user/user";
import {LoadingStatus} from "../../reducer/review/review";

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

it(`Should LocationsList render correctly`, () => {
  const store = mockStore({
    [NameSpace.OFFERS]: {
      loadingOfferStatus: LoadingOfferStatus.PROCESSING,
      error: null,
      cities: [],
      activeCity: {
        location: {
          latitude: 52.38333,
          longitude: 4.9,
          zoom: 12
        },
        name: `City`,
      },
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
            <PlaceCardList
              offers={offersMock}
              listClass={`string`}
              handleOfferHover={()=>{}}
            />
          </Router>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
