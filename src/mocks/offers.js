import {getRandomNumber, getRandomElement} from "../utils";

const PRICE = {
  MIN: 50,
  MAX: 500
};

const offersNames = [
  `Beautiful & luxurious apartment at great location`,
  `Nice, cozy, wood and stone place`,
  `Wood and stone place`,
  `Nice, cozy, warm big bed apartment`,
  `Beautiful & luxurious apartment at great location`,
  `Nice, cozy, wood and stone place`,
  `Wood and stone place`,
  `Nice, cozy, warm big bed apartment`
];

const holderNames = [
  `Angelina`,
  `Max`,
];

const offersTypes = [
  `apartment`,
  `room`,
  `house`,
  `hotel`
];

const offersCords = [
  [52.3909553943508, 4.85309666406198],
  [52.369553943508, 4.85309666406198],
  [52.3909553943508, 4.929309666406198],
  [52.3809553943508, 4.939309666406198],
  [48.8588377121212, 2.2770203121212],
  [48.8688377212121, 2.3170203212121],
  [48.8788377131313, 2.3270203131313],
  [48.8888377313131, 2.2770203313131]
];

const createOffer = (index, city) => {
  const bedRoomQuantity = getRandomNumber(1, 6);
  const maxGuestQuantity = bedRoomQuantity * 2;
  const holderName = getRandomElement(holderNames);


  return {
    city: {
      location: {
        latitude: city === `Amsterdam` ? 52.38333 : 48.8588377,
        longitude: city === `Amsterdam` ? 4.9 : 2.2770203,
        zoom: 12
      },
      name: city,
    },
    id: index,
    img: `img/apartment-0${getRandomNumber(1, 3)}.jpg`,
    photos: [
      `img/apartment-0${getRandomNumber(1, 3)}.jpg`,
      `img/apartment-0${getRandomNumber(1, 3)}.jpg`,
      `img/apartment-0${getRandomNumber(1, 3)}.jpg`,
      `img/apartment-0${getRandomNumber(1, 3)}.jpg`,
      `img/apartment-0${getRandomNumber(1, 3)}.jpg`,
      `img/apartment-0${getRandomNumber(1, 3)}.jpg`,
    ],
    isPremium: !!(index % 2),
    price: getRandomNumber(PRICE.MIN, PRICE.MAX),
    name: offersNames[index],
    type: getRandomElement(offersTypes),
    rating: parseFloat(`${getRandomNumber(2, 4)}.${getRandomNumber(0, 9)}`),
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    bedRoomQuantity,
    maxGuestQuantity,
    details: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`,
    ],
    holder: {
      holderName,
      img: `img/avatar-${holderName.toLowerCase()}.jpg`,
      isSuper: !(index % 2),
    },
    location: {
      latitude: offersCords[index][0],
      longitude: offersCords[index][1],
      zoom: 8
    },
    reviews: [
      {
        id: getRandomNumber(1, 10000),
        text: `some information about offer, some information about offer`,
        rating: parseFloat(`${getRandomNumber(2, 4)}.${getRandomNumber(0, 9)}`),
        name: `Konstantin`,
        date: `2019-04-24`,
      },
      {
        id: getRandomNumber(1, 10000),
        text: `some information about offer, some information about offer`,
        rating: parseFloat(`${getRandomNumber(2, 4)}.${getRandomNumber(0, 9)}`),
        name: `Kostya`,
        date: `2017-05-26`,
      },
    ],
  };
};

const createOffers = (amount) => {
  const offers = [];

  for (let i = 0; i < amount; i++) {
    let cityName = i <= 3 ? `Amsterdam` : `Paris`;
    const offer = createOffer(i, cityName);

    offers.push(offer);
  }
  return offers;

};


export {createOffers};
