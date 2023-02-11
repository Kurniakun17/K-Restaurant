import { openDB } from 'idb';

const dbPromise = openDB('kRestaurant', 1, {
  upgrade(database) {
    database.createObjectStore('foods', { keyPath: 'id' });
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
    if (data.id) {
      return (await dbPromise).put(objectStoreName, data);
    }

    return null;
  },

  async deleteData(objectStoreName, id) {
    return (await dbPromise).delete(objectStoreName, id);
  },
};

export default favDatas;
