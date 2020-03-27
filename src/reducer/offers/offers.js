import {extend, getCities} from "../../utils.js";


const initialState = {
  load: null,
  error: null,
  cities: [],
  activeCity: null,
  offers: [],
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  CHANGE_CITY: `CHANGE_CITY`,
  GET_ERROR: `GET_ERROR`
};

const ActionCreator = {
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  getError: (err) => ({
    type: ActionType.GET_ERROR,
    payload: err,
  })
};

const Operation = {
  download: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data));
      })
      .catch((err) => {
        throw err;
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      const cities = getCities(action.payload);

      return extend(state, {
        load: true,
        cities,
        offers: action.payload,
        activeCity: cities[0]
      });

    case ActionType.CHANGE_CITY:
      return extend(state, {activeCity: action.payload});

    case ActionType.GET_ERROR:
      return extend(state, {error: action.payload, load: `fail`});
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
