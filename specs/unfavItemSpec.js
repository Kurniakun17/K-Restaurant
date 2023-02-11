import favDatas from '../src/scripts/data/favDatas';
import initiator from '../src/scripts/utils/init';

describe('Unfavoriting Item', () => {
  const createFavContainer = () => {
    document.body.innerHTML = '<div id="fav-container"></div>';
  };

  beforeEach(async () => {
    createFavContainer();
    await favDatas.putData('restaurants', { id: 1 });
    await initiator.FavButton({ id: 1, type: 'restaurants' }, favDatas);
  });

  afterEach(async () => {
    await favDatas.deleteData('restaurants', 1);
  });

  it('Should show the remove from favorite button on favorited item', async () => {
    expect(document.querySelector('[aria-label="remove from favorite"]')).toBeTruthy();
  });

  it('Should not show the add to favorite button on favorited item', async () => {
    expect(document.querySelector('[aria-label="add to favorite"]')).toBeFalsy();
  });

  it('Should be able to remove favorited item', async () => {
    document.getElementById('fav-button').dispatchEvent(new Event('click'));

    expect(await favDatas.getAllDatas('restaurants')).toEqual([]);
  });

  it('Should not be able to unfavorited an item that hasnt been favorited', async () => {
    favDatas.deleteData('restaurants', 1);

    document.getElementById('fav-button').dispatchEvent(new Event('click'));

    expect(await favDatas.getAllDatas('restaurants')).toEqual([]);
  });
});
