import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import reducer from "./reducer/reducer.js";
import {createAPI} from "./api";
import {Operation as OffersOperation, ActionCreator as ActionCreatorOffers} from "./reducer/offers/offers.js";
import {Operation as UserOperation, ActionCreator as ActionCreatorUser, AuthorizationStatus} from "./reducer/user/user.js";
import {composeWithDevTools} from "redux-devtools-extension";

export const onError = (err) => {
  store.dispatch(ActionCreatorOffers.getError(err));
};

export const onUnauthorized = () => {
  store.dispatch(ActionCreatorUser.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI();


const store = createStore(
    reducer,
    composeWithDevTools({trace: true, traceLimit: 25})(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(OffersOperation.download());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);

