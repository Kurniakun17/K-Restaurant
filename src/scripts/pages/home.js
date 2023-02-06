import FoodDatas from '../../FOODDATA.json';
import config from '../globals/config';
import { createFoodArticle, createRestaurantArticle } from '../utils/createTemplate';

const Home = {
  async render() {
    return (
      `
      <div class="hero home">
        <div class="hero-content-container wrapper">
          <h1 class="hero-title">An Online Restaurant Guide That Helps You Find The Best Food and Place to Eat</h1>
          <Button class="cta" onclick="location.href='#main'">
            Let's Find Out
          </Button>
        </div>
      </div>
      <div id="main-content" tabindex="0">
        <section class="content wrapper">
          <div class="section-container-title">
            <h1 class="headline">Restaurant List</h1>
          </div>
          <div id="restaurant-list" class="list">
            <h2>Loading. . .</h2>
          </div>
        </section>
        <section class="content wrapper">
          <div class="section-container-title">
            <h2 class="headline">Food List</h2>
          </div>
          <div id="food-list" class="list">
            <h2>Loading. . .</h2>
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

export default Home;
