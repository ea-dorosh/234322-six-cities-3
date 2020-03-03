import {getRandomNumber, getRandomElement} from "../utils";

const PRICE = {
  MIN: 50,
  MAX: 500
};

const offersNames = [
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
  [52.3809553943508, 4.939309666406198]
];

const createOffer = (index) => {
  const bedRoomQuantity = getRandomNumber(1, 6);
  const maxGuestQuantity = bedRoomQuantity * 2;
  const holderName = getRandomElement(holderNames);

  return {
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
    coords: {
      x: offersCords[index][0],
      y: offersCords[index][1],
    }
  };
};

const createOffers = (amount) => {
  const offers = [];

  for (let i = 0; i < amount; i++) {
    const offer = createOffer(i);

    offers.push(offer);
  }
  return offers;

};


export {createOffers};
