import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import reducer from "./reducer/reducer.js";
import {createAPI} from "./api";
import {Operation, ActionCreator} from "./reducer/offers/offers.js";
import {Operation as UserOperation, AuthorizationStatus} from "./reducer/user/user.js";
import {composeWithDevTools} from "redux-devtools-extension";

export const onError = (err) => {
  store.dispatch(ActionCreator.getError(err));
};

export const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI();


const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(Operation.download());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);

