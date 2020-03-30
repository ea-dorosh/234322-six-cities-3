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

export const prepareData = (data) => {

  return data.map((offer) => (
    {
      city: {
        location: {
          latitude: offer.city.location.latitude,
          longitude: offer.city.location.longitude,
          zoom: offer.city.location.zoom,
        },
        name: offer.city.name,
      },
      img: offer.preview_image,
      photos: offer.images,
      name: offer.title,
      isFavorite: offer.is_favorite,
      isPremium: offer.is_premium,
      rating: offer.rating,
      type: offer.type,
      bedRoomQuantity: offer.bedrooms,
      maxGuestQuantity: offer.max_adults,
      price: offer.price,
      details: offer.goods,
      holder: {
        holderName: offer.host.name,
        img: offer.host.avatar_url,
        isSuper: offer.host.is_pro,
        id: offer.host.id
      },
      description: offer.description,
      location: {
        latitude: offer.location.latitude,
        longitude: offer.location.longitude,
        zoom: offer.location.zoom,
      },
      id: 1,
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
    }
  ));
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
