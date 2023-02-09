import favDatas from '../src/scripts/data/fav-datas';
import initiator from '../src/scripts/utils/init';

describe('Unfavoriting Item', () => {
  const createFavContainer = () => {
    document.body.innerHTML = '<div id="fav-container"></div>';
  };

  beforeEach(async () => {
    createFavContainer();
    await favDatas.putData('restaurants', { id: 1 });
    await initiator.FavButton({ id: 1, type: 'restaurants' });
  });

  afterEach(async () => {
    await favDatas.deleteData('restaurants', 1);
  });

  it('Should show the remove from favorite button on favorited item', async () => {
    expect(document.querySelector('[aria-label="remove from favorite"]')).toBeTruthy();
  });

  xit('Should not show the add to favorite button on favorited item', async () => {
    expect(document.querySelector('[aria-label="add to favorite"]')).toBeFalsy();
  });

  xit('Should be able to remove favorited item', async () => {
    expect(await favDatas.getAllDatas('restaurants')).toEquals([]);
  });
});
