import FoodDatas from '../../FOODDATA.json';
import config from '../globals/config';
import { createFoodArticle, createRestaurantArticle, createArticleSkeleton } from '../utils/createTemplate';

const Catalogue = {
  async render() {
    return (
      `
    <div class="hero small catalogue">
      <div class="hero-content-container wrapper">
        <h1 class="hero-title">Catalogue</h1>
      </div>
    </div>
      <div id="main-content" tabindex="0">
        <section class="content wrapper">
          <div class="section-container-title">
            <h2 class="headline">Restaurant List</h2>
          </div>
          <div id="restaurant-list" class="list">
            ${createArticleSkeleton(20)}
          </div>
        </section>
        <section class="content wrapper">
          <div class="section-container-title">
            <h2 class="headline">Food List</h2>
          </div>
          <div id="food-list" class="list">
            ${createArticleSkeleton(5)}
          </div>
        </section>
      </div>
    `
    );
  },

  async afterRender() {
    const restaurantList = document.getElementById('restaurant-list');
    const foodList = document.getElementById('food-list');
    try {
      const RestaurantDatas = await (await fetch(`${config.base_url}/list`)).json();
      if (this.reqStatus(RestaurantDatas)) {
        document.body.innerHTML = `
          <div class="error-request">
            <h1>${RestaurantDatas.message}</h1>
          </div>
        `;
      }

      restaurantList.innerHTML = '';
      foodList.innerHTML = '';

      RestaurantDatas.restaurants.forEach((restaurant) => {
        restaurantList.appendChild(createRestaurantArticle(restaurant));
      });

      FoodDatas.foods.forEach((food) => {
        foodList.appendChild(createFoodArticle(food));
      });
    } catch (err) {
      restaurantList.innerHTML = `<h2>${err.message}<h2>`;
    }
  },

  reqStatus(data) {
    return data.error;
  },
};

export default Catalogue;
