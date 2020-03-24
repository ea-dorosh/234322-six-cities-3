import {extend, getCities} from "../../utils.js";
import {createOffers} from "../../mocks/offers";
import {getOffersByCity} from "../../utils";


const OFFERS_QUANTITY = 8;

const offersMock = createOffers(OFFERS_QUANTITY);

const cities = getCities(offersMock);

const emptyCity = {
  location: {
    latitude: 52.38333,
    longitude: 4.9,
    zoom: 12
  },
  name: `Munich`,
};

cities.push(emptyCity);

const initialState = {
  cities,
  activeCity: cities[0],
  offers: getOffersByCity(offersMock, cities[0].name),
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
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
  getOffers: (data) => ({
    type: ActionType.GET_OFFERS,
    payload: data,
  }),
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data));
      });
  }
};

const reducer = (state = initialState, action)=>{
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, action.payload);

    case ActionType.CHANGE_CITY:
      return extend(state, {activeCity: action.payload});

    case ActionType.GET_OFFERS:
      return extend(state, {offers: getOffersByCity(offersMock, action.payload)});
  }
  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
