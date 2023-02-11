import favDatas from '../src/scripts/data/favDatas';
import itActAsFavDataModel from './favDatasContract';

describe('favDatas Contract Implementation', () => {
  afterEach(async () => {
    (await favDatas.getAllDatas('foods')).forEach(async (data) => {
      await favDatas.deleteData('foods', data.id);
    });
  });

  itActAsFavDataModel(favDatas);
});
