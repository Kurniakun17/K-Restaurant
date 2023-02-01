import { openDB } from 'idb';

const dbPromise = openDB('k-restaurant', 1, {
  upgrade(database) {
    database.createObjectStore('restaurants', { keyPath: 'id' });
    database.createObjectStore('foods', { keyPath: 'id' });
  },
});

const favDatas = {
  async getAllRestaurants() {
    return (await dbPromise).getAll('restaurants');
  },

  async putRestaurant(data) {
    return (await dbPromise).put('restaurants', data);
  },

  async getAllFoods() {
    return (await dbPromise).getAll('foods');
  },

  async putFood(data) {
    return (await dbPromise).put('foods', data);
  },
};

export default favDatas;
