import {extend} from '../../utils.js';


const initialState = {
  sortType: `Popular`,
  marker: null,
};


const ActionType = {
  SORT_OFFERS: `SORT_OFFERS`,
  HIGHLIGHT_MARKER: `HIGHLIGHT_MARKER`,
};

const ActionCreator = {
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

    case ActionType.SORT_OFFERS:
      return extend(state, {sortType: action.payload});

    case ActionType.HIGHLIGHT_MARKER:
      return extend(state, {marker: action.payload});
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
