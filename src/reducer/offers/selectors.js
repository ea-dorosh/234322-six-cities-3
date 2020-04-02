import NameSpace from "../name-space.js";
import {SortType} from "../../utils";
import {createSelector} from "reselect";
import {getSortType} from "../main/selectors";
import {getOffersByCity} from "../../utils";


const NAME_SPACE = NameSpace.OFFERS;

export const getLoadStatus = (state) => {
  return state[NAME_SPACE].loadingOfferStatus;
};

export const getNearOffers = (state) => {
  return state[NAME_SPACE].nearOffers;
};

export const getError = (state) => {
  return state[NAME_SPACE].error;
};

export const getActiveCity = (state) => {
  return state[NAME_SPACE].activeCity;
};

export const getCitiesList = (state) => {
  return state[NAME_SPACE].cities;
};

function getOffers(state) {
  return state[NAME_SPACE].offers;
}

const getOffersByActiveCity = createSelector([
  getOffers,
  getActiveCity,
], (offers, activeCity) => getOffersByCity(offers, activeCity.name)
);

function getSortedOffers(offers, sortType) {
  switch (sortType) {
    case SortType.PRICE_TO_LOW:
      return offers.slice().sort((a, b) => b.price - a.price);
    case SortType.PRICE_TO_HIGH:
      return offers.slice().sort((a, b) => a.price - b.price);
    case SortType.TOP_RATED:
      return offers.slice().sort((a, b) => b.rating - a.rating);
  }
  return offers;
}


export const sortOffersBySortType = createSelector([
  getOffersByActiveCity,
  getSortType,
], (offers, sortType) => getSortedOffers(offers, sortType)
);

export const selectOffers = (state) => {
  return sortOffersBySortType(state);
};
