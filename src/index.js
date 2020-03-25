import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import reducer from "./reducer/reducer.js";
import {createAPI} from "./api";
import {Operation, ActionCreator} from "./reducer/offers/offers";
import {composeWithDevTools} from "redux-devtools-extension";

export const onError = (err) => {
  store.dispatch(ActionCreator.getError(err));
  store.dispatch(Operation.changeState());
};

const api = createAPI();


const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(Operation.download());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);

