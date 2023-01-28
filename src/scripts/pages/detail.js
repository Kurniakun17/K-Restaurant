import config from '../globals/config';
import UrlParser from '../routes/urlParser';
import FoodData from '../../FOODDATA.json';
import { createFoodArticle, createRestaurantArticle } from '../utils/createTemplate';

const Detail = {
  async render() {
    return (
      `
        <div id="container"></div>
      `
    );
  },

  async afterRender() {
    const url = UrlParser.ActiveUrlWithoutCombiner();
    const container = document.getElementById('container');

    if (this._isRestaurant(url.type)) {
      const data = await (await fetch(`${config.base_url}/detail/${url.id}`)).json();
      console.log(data);
      return container.appendChild(createRestaurantArticle(data.restaurant));
    }
    const data = FoodData.foods.filter((food) => food.idMeal === url.id)[0];
    return container.appendChild(createFoodArticle(data));
  },

  _isRestaurant(type) {
    return (type === 'restaurant');
  },
};

export default Detail;
