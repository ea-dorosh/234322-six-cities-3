import NameSpace from "../name-space.js";
import {SortType} from "../../utils";
import {createSelector} from "reselect";
import {getSortType} from "../main/selectors";


const NAME_SPACE = NameSpace.OFFERS;

function getOffers(state) {
  return state[NAME_SPACE].offers;
}

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

export const selectOffers = (state) => {
  return sortOffersBySortType(state);
};

const sortOffersBySortType = createSelector([
  getOffers,
  getSortType,
], (offers, sortType) => getSortedOffers(offers, sortType)
);

export const getActiveCity = (state) => {
  return state[NAME_SPACE].activeCity;
};


export const getCitiesList = (state) => {
  return state[NAME_SPACE].cities;
};

