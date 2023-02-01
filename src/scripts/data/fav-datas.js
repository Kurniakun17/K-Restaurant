import { openDB } from 'idb';

const dbPromise = openDB('kRestaurant', 1, {
  upgrade(database) {
    database.createObjectStore('restaurants', { keyPath: 'id' });
  },
});

const favDatas = {
  async getAllDatas(objectStoreName) {
    return (await dbPromise).getAll(objectStoreName);
  },

  async getData(objectStoreName, id) {
    return (await dbPromise).get(objectStoreName, id);
  },

  async putData(objectStoreName, data) {
    console.log(data);
    return (await dbPromise).put(objectStoreName, data);
  },

  async deleteData(objectStoreName, id) {
    return (await dbPromise).delete(objectStoreName, id);
  },
};

export default favDatas;
