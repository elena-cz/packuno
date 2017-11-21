const seedState = {
  currentUserId: 1,
  currentTripId: 1,
  trips: {
    byID: {
      1: {
        id: 1,
        destination: 'Hong Kong',
        departureDate: '2017-9-29',
        returnDate: '2017-11-01',
      },
      2: {
        id: 2,
        destination: 'Mexico City',
        departureDate: '2018-01-07',
        returnDate: '2018-01-16',
      },
      3: {
        id: 3,
        destination: 'Greenland',
        departureDate: '2018-06-15',
        returnDate: '2018-07-01',
      },
      4: {
        id: 4,
        destination: 'Tokyo',
        departureDate: '2018-08-13',
        returnDate: '2018-08-29',
      },
    },
    allIDs: [1, 2, 3, 4],
  },
  items: {
    byID: {
      1: {
        id: 1,
        item: 'Shampoo',
        category: 'Toiletries',
        packed: false,
      },
      2: {
        id: 2,
        item: 'Conditioner',
        category: 'Toiletries',
        packed: false,
      },
      3: {
        id: 3,
        item: 'Socks',
        category: 'Clothes',
        packed: false,
      },
      4: {
        id: 4,
        item: 'Charger',
        category: 'Accessories',
        packed: false,
      },
    },
    allIDs: [1, 2, 3, 4],
  },
  visibilityFilter: 'SHOW_ALL',
  weatherWidget: 'HISTORICAL',
  historicalWeather: [],
  forecastWeather: [],
};


export default seedState;
