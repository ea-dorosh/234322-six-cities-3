const offersMock = [
  {
    city: {
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 12
      },
      name: `City`,
    },
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
    location: {
      latitude: 42.3909553943508,
      longitude: 42.3909553943508,
      zoom: 8
    },
    reviews: [
      {
        id: 1,
        comment: `some information about offer, some information about offer`,
        rating: 3.4,
        user: {
          name: `Konstantin`,
          avatarUrl: `avatar.jpg`,
          id: 134,
          isPro: false,
        },
        date: `2019-04-24`,
      },
      {
        id: 2,
        text: `some information about offer, some information about offer`,
        rating: 3.4,
        user: {
          name: `Konstantin`,
          avatarUrl: `avatar.jpg`,
          id: 124,
          isPro: false,
        },
        date: `2019-04-24`,
      },
    ],
  },
  {
    city: {
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 12
      },
      name: `City`,
    },
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
    location: {
      latitude: 42.3909553943508,
      longitude: 42.3909553943508,
      zoom: 8
    },
    reviews: [
      {
        id: 1,
        comment: `some information about offer, some information about offer`,
        rating: 3.4,
        user: {
          name: `Konstantin`,
          avatarUrl: `avatar.jpg`,
          id: 34,
          isPro: false,
        },
        date: `2019-04-24`,
      },
      {
        id: 2,
        text: `some information about offer, some information about offer`,
        rating: 3.4,
        user: {
          name: `Konstantin`,
          avatarUrl: `avatar.jpg`,
          id: 24,
          isPro: false,
        },
        date: `2019-04-24`,
      },
    ],
  }
];

const offerMock = {
  city: {
    location: {
      latitude: 52.38333,
      longitude: 4.9,
      zoom: 12
    },
    name: `City`,
  },
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
  location: {
    latitude: 42.3909553943508,
    longitude: 42.3909553943508,
    zoom: 8
  },
  reviews: [
    {
      id: 1,
      comment: `some information about offer, some information about offer`,
      rating: 3.4,
      user: {
        name: `Konstantin`,
        avatarUrl: `avatar.jpg`
      },
      date: `2019-04-24`,
    },
    {
      id: 2,
      text: `some information about offer, some information about offer`,
      rating: 3.4,
      user: {
        name: `Konstantin`,
        avatarUrl: `avatar.jpg`
      },
      date: `2019-04-24`,
    },
  ],
};

const citiesMock = [
  {
    city: {
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 12
      },
      name: `City`,
    },
  },
  {
    city: {
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 12
      },
      name: `City`,
    }
  }
];

const userPropertiesMock = {
  id: 1,
  email: `ea-dorosh@yandex.ru`,
  name: `ea-dorosh`,
  avatarUrl: `/static/avatar/6.jpg`,
};


export {offersMock, offerMock, citiesMock, userPropertiesMock};
