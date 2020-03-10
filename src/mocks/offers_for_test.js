import {getRandomNumber} from "../utils";

const offersMock = [
  {
    id: 1,
    img: `url path-1 string`,
    photos: [`path-1 string`, `path-2 string`],
    isPremium: true,
    price: 50,
    name: `apartment-1 name string`,
    type: `string`,
    rating: 4.0,
    description: `just sting`,
    bedRoomQuantity: 2,
    maxGuestQuantity: 4,
    details: [`detail-1 string`, `detail-2 string`],
    holder: {
      holderName: `just sting`,
      img: `path sting`,
      isSuper: true,
    },
    coords: {
      x: 42.3909553943508,
      y: 42.3909553943508
    },
    reviews: [
      {
        text: `some information about offer, some information about offer`,
        rating: 3.3,
        name: `Konstantin`,
        date: `2019-04-24`,
        id: 1,
      },
      {
        text: `some information about offer, some information about offer`,
        rating: 4.5,
        name: `Kostya`,
        date: `2017-05-26`,
        id: 2,
      },
    ],
  },
  {
    id: 2,
    img: `url path-1 string`,
    photos: [`path-1 string`, `path-2 string`],
    isPremium: true,
    price: 50,
    name: `apartment-1 name string`,
    type: `string`,
    rating: 4.0,
    description: `just sting`,
    bedRoomQuantity: 2,
    maxGuestQuantity: 4,
    details: [`detail-1 string`, `detail-2 string`],
    holder: {
      holderName: `just sting`,
      img: `path sting`,
      isSuper: true,
    },
    coords: {
      x: 42.3909553943508,
      y: 42.3909553943508
    },
    reviews: [
      {
        id: getRandomNumber(1, 10000),
        text: `some information about offer, some information about offer`,
        rating: 4.5,
        name: `Konstantin`,
        date: `2019-04-24`,
      },
      {
        id: getRandomNumber(1, 10000),
        text: `some information about offer, some information about offer`,
        rating: 3.8,
        name: `Kostya`,
        date: `2017-05-26`,
      },
    ],
  }
];

const offerMock = {
  id: 1,
  img: `url path-1 string`,
  photos: [`path-1 string`, `path-2 string`],
  isPremium: true,
  price: 50,
  name: `apartment-1 name string`,
  type: `string`,
  rating: 4.0,
  description: `just sting`,
  bedRoomQuantity: 2,
  maxGuestQuantity: 4,
  details: [`detail-1 string`, `detail-2 string`],
  holder: {
    holderName: `just sting`,
    img: `path sting`,
    isSuper: true,
  },
  coords: {
    x: 42.3909553943508,
    y: 42.3909553943508
  },
  reviews: [
    {
      id: 1,
      text: `some information about offer, some information about offer`,
      rating: 3.4,
      name: `Konstantin`,
      date: `2019-04-24`,
    },
    {
      id: 2,
      text: `some information about offer, some information about offer`,
      rating: 4.5,
      name: `Kostya`,
      date: `2017-05-26`,
    },
  ],
};

export {offersMock, offerMock};
