export const getRandomNumber = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

export const getRandomElement = (array) => {
  return array[getRandomNumber(0, array.length - 1)];
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getCities = (array) => {
  const cities = array.map((item) => item.city);
  const citiesByName = cities.reduce((acc, city) => {
    acc[city.name] = city; return acc;
  }, {});

  return Object.values(citiesByName);
};

export const getOffersByCity = (array, city) => {
  return array.filter((item) => item.city.name === city);
};

export const SortType = {
  POPULAR: `Popular`,
  PRICE_TO_HIGH: `Price: low to high`,
  PRICE_TO_LOW: `Price: high to low`,
  TOP_RATED: `Top rated first`
};

export const CITIES = `cities`;

const ratingToStarMap = {1: 20, 2: 40, 3: 60, 4: 80, 5: 100};
export const ratingToStar = (rating) => ratingToStarMap[Math.round(rating)] || Math.round(rating);
