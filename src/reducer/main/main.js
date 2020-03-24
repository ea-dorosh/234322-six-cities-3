import {extend, getOffersByCity} from '../../utils.js';


const initialState = {
  sortType: `Popular`,
  marker: null,
};


const ActionType = {
  // CHANGE_CITY: `CHANGE_CITY`,
  // GET_OFFERS: `GET_OFFERS`,
  SORT_OFFERS: `SORT_OFFERS`,
  HIGHLIGHT_MARKER: `HIGHLIGHT_MARKER`,
};

const ActionCreator = {
  // changeCity: (city) => ({
  //   type: ActionType.CHANGE_CITY,
  //   payload: city,
  // }),
  // getOffers: (data) => ({
  //   type: ActionType.GET_OFFERS,
  //   payload: data,
  // }),
  sortOffers: (sortType) => ({
    type: ActionType.SORT_OFFERS,
    payload: sortType,
  }),
  highlightMarker: (offer) => ({
    type: ActionType.HIGHLIGHT_MARKER,
    payload: offer,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case ActionType.CHANGE_CITY:
    //   return extend(state, {activeCity: action.payload});
    //
    // case ActionType.GET_OFFERS:
    //   return extend(state, {offers: getOffersByCity(offers, action.payload)});

    case ActionType.SORT_OFFERS:
      return extend(state, {sortType: action.payload});

    case ActionType.HIGHLIGHT_MARKER:
      return extend(state, {marker: action.payload});
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
