import {getRandomNumber} from "../utils";

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

const createOffer = (index) => {

  return {
    name: offersNames[index],
    price: getRandomNumber(PRICE.MIN, PRICE.MAX),
    img: `img/apartment-0${getRandomNumber(1, 3)}.jpg`,
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
