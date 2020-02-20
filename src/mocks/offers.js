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

const offersTypes = [
  `apartment`,
  `room`,
  `house`,
  `hotel`
];

const createOffer = (index) => {

  return {
    img: `img/apartment-0${getRandomNumber(1, 3)}.jpg`,
    isPremium: !!(index % 2),
    price: getRandomNumber(PRICE.MIN, PRICE.MAX),
    name: offersNames[index],
    type: getRandomElement(offersTypes),
    rating: parseFloat(`${getRandomNumber(2, 4)}.${getRandomNumber(0, 9)}`)
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
