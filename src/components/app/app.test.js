import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {LoadingOfferStatus} from "../../reducer/offers/offers";
import {LoadingStatus} from "../../reducer/review/review";
import App from "./app";

const mockStore = configureStore([]);

it(`Should FavoritesCityItem render correctly`, () => {
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
          <App/>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
