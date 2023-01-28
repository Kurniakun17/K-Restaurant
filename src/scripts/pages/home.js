import FoodDatas from '../../FOODDATA.json';
import config from '../globals/config';
import { createFoodArticle, createRestaurantArticle } from '../utils/createTemplate';

const Home = {
  async render() {
    return (
      `
      <div class="hero">
        <div class="hero-content-container">
          <h2 class="hero-title">An Online Restaurant Guide That Helps You Find The Best Food and Place to Eat</h2>
          <Button class="cta" onclick="location.href='#main'">
            Let's Find Out
          </Button>
        </div>
      </div>
      <section class="content">
        <div class="section-container-title">
          <h2 class="main-headline">Restaurant List</h2>
        </div>
        <div id="restaurant-list" class="list"></div>
      </section>
      <section class="content">
        <div class="section-container-title">
          <h2 class="main-headline">Food List</h2>
        </div>
        <div id="food-list" class="list"></div>
      </section>
    `
    );
  },

  async afterRender() {
    const restaurantList = document.getElementById('restaurant-list');
    const foodList = document.getElementById('food-list');

    const RestaurantDatas = await (await fetch(`${config.base_url}/list`)).json();
    if (this.reqStatus(RestaurantDatas)) {
      document.body.innerHTML = `
        <div class="error-request">
          <h1>${RestaurantDatas.message}</h1>
        </div>
      `;
    }

    RestaurantDatas.restaurants.forEach((restaurant) => {
      restaurantList.appendChild(createRestaurantArticle(restaurant));
    });

    FoodDatas.foods.forEach((food) => {
      foodList.appendChild(createFoodArticle(food));
    });
  },

  reqStatus(data) {
    return data.error;
  },
};

export default Home;
