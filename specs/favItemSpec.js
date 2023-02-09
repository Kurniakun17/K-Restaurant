import favDatas from '../src/scripts/data/fav-datas';
import initiator from '../src/scripts/utils/init';

describe('Favoriting Item', () => {
  const createFavContainer = () => {
    document.body.innerHTML = '<div id="fav-container"></div>';
  };

  beforeEach(async () => {
    createFavContainer();
    await initiator.FavButton({ id: 1, type: 'restaurants' });
  });

  it('Should show the add to favorite button on unfavorited item', async () => {
    expect(document.querySelector('[aria-label="add to favorite"]')).toBeTruthy();
  });

  it('Should not show the remove from favorite button on unfavorited item', async () => {
    expect(document.querySelector('[aria-label="remove from favorite"]')).toBeFalsy();
  });

  it('Should store the item on IDB', async () => {
    document.getElementById('fav-button').dispatchEvent(new Event('click'));

    const data = await favDatas.getData('restaurants', 1);

    expect(data).toBeTruthy();

    favDatas.deleteData('restaurants', 1);
  });

  it('Should not store an item when it has been favorited before', async () => {
    await favDatas.putData('restaurants', { id: 1 });

    document.getElementById('fav-button').dispatchEvent(new Event('click'));

    const data = await favDatas.getAllDatas('restaurants');

    expect(data).toEqual([{ id: 1, type: 'restaurants' }]);

    favDatas.deleteData('restaurants', 1);
  });

  xit('Should not store an undefined item ID', async () => {
    await initiator.FavButton({});
  });
});
