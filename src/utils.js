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

  return filterUniqueByProperty(cities, `name`);
};

export const getOffersByCity = (array, city) => {
  return array.filter((item) => item.city.name === city);
};


function filterUniqueByProperty(objects, prop) {
  return objects.filter((obj, i, self) =>
    i === self.findIndex((x) => x[prop] === obj[prop])
  );
}

export const SortType = {
  POPULAR: `Popular`,
  PRICE_TO_HIGH: `Price: low to high`,
  PRICE_TO_LOW: `Price: high to low`,
  TOP_RATED: `Top rated first`
};

export const CITIES = `cities`;
