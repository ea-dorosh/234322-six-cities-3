import {extend, getCities, prepareData} from "../../utils.js";


const LoadingOfferStatus = {
  PROCESSING: `PROCESSING`,
  SUCCESS: `SUCCESS`,
  FAILED: `FAILED`,
};

const initialState = {
  loadingOfferStatus: LoadingOfferStatus.PROCESSING,
  error: null,
  cities: [],
  activeCity: null,
  offers: [],
  nearOffers: [],
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  CHANGE_CITY: `CHANGE_CITY`,
  GET_ERROR: `GET_ERROR`,
  LOAD_NEAR_OFFERS: `LOAD_NEAR_OFFERS`,
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
  }),
  loadNearOffers: (nearOffers) => ({
    type: ActionType.LOAD_NEAR_OFFERS,
    payload: nearOffers
  }),
};

const Operation = {
  download: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const data = prepareData(response.data);
        dispatch(ActionCreator.loadOffers(data));
      })
      .catch((err) => {
        throw err;
      });
  },
  downloadNearOffers: (id) => (dispatch, getState, api) => {
    return api.get(`/hotels/${id}/nearby`)
      .then((response) => {
        const data = prepareData(response.data);
        dispatch(ActionCreator.loadNearOffers(data));
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
        loadingOfferStatus: LoadingOfferStatus.SUCCESS,
        cities,
        offers: action.payload,
        activeCity: cities[0]
      });

    case ActionType.CHANGE_CITY:
      return extend(state, {activeCity: action.payload});

    case ActionType.GET_ERROR:
      return extend(state, {error: action.payload, loadingOfferStatus: LoadingOfferStatus.FAILED});

    case ActionType.LOAD_NEAR_OFFERS:
      return extend(state, {nearOffers: action.payload});
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator, LoadingOfferStatus};

