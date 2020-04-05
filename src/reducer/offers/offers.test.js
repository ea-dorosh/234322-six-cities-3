import {reducer, ActionCreator} from "./offers.js";
import {LoadingOfferStatus} from "./offers";
import {citiesMock, offersMock} from "../../mocks/offers_for_test";

const mockActiveCity = {
  location: {
    latitude: 52.38333,
    longitude: 4.9,
    zoom: 12
  },
  name: `City`,
};

const mockCities = [mockActiveCity]

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    loadingOfferStatus: LoadingOfferStatus.PROCESSING,
    error: null,
    cities: [],
    activeCity: null,
    offers: [],
    nearOffers: [],
  });
});

it(`Reducer download offers `, () => {
  expect(reducer({
    loadingOfferStatus: LoadingOfferStatus.PROCESSING,
    error: null,
    cities: [],
    activeCity: null,
    offers: [],
    nearOffers: [],
  },
  ActionCreator.loadOffers(offersMock)
  )).toEqual({
    loadingOfferStatus: LoadingOfferStatus.SUCCESS,
    error: null,
    cities: mockCities,
    activeCity: mockActiveCity,
    offers: offersMock,
    nearOffers: [],
  });
});

it(`Reducer refresh offers `, () => {
  expect(reducer({
    loadingOfferStatus: LoadingOfferStatus.SUCCESS,
    error: null,
    cities: [],
    activeCity: null,
    offers: [],
    nearOffers: [],
  },
  ActionCreator.refresh(offersMock)
  )).toEqual({
    loadingOfferStatus: LoadingOfferStatus.SUCCESS,
    error: null,
    cities: [],
    activeCity: null,
    offers: offersMock,
    nearOffers: [],
  });
});

it(`Reducer change City `, () => {
  expect(reducer({
    loadingOfferStatus: LoadingOfferStatus.SUCCESS,
    error: null,
    cities: [],
    activeCity: null,
    offers: [],
    nearOffers: [],
  },
  ActionCreator.changeCity(citiesMock[0])
  )).toEqual({
    loadingOfferStatus: LoadingOfferStatus.SUCCESS,
    error: null,
    cities: [],
    activeCity: citiesMock[0],
    offers: [],
    nearOffers: [],
  });
});


it(`Reducer get error`, () => {
  expect(reducer({
    loadingOfferStatus: LoadingOfferStatus.PROCESSING,
    error: null,
    cities: [],
    activeCity: null,
    offers: [],
    nearOffers: [],
  },
  ActionCreator.getError(Error)
  )).toEqual({
    loadingOfferStatus: LoadingOfferStatus.FAILED,
    error: Error,
    cities: [],
    activeCity: null,
    offers: [],
    nearOffers: [],
  });
});

it(`Reducer get near offers`, () => {
  expect(reducer({
    loadingOfferStatus: LoadingOfferStatus.PROCESSING,
    error: null,
    cities: [],
    activeCity: null,
    offers: [],
    nearOffers: [],
  },
  ActionCreator.loadNearOffers(offersMock)
  )).toEqual({
    loadingOfferStatus: LoadingOfferStatus.PROCESSING,
    error: null,
    cities: [],
    activeCity: null,
    offers: [],
    nearOffers: offersMock,
  });
});

