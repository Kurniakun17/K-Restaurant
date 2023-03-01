import FoodDatas from '../../FOODDATA.json';
import config from '../globals/config';
import { createFoodArticle, createRestaurantArticle, createArticleSkeleton } from '../utils/createTemplate';
import initiator from '../utils/init';

const Catalogue = {
  async render() {
    return (
      `
    <div class="hero small catalogue">
      <div class="hero-content-container wrapper">
        <h1 class="hero-title xl-headline">Catalogue</h1>
      </div>
    </div>
    <div id="main-content" tabindex="0">
      <section class="content wrapper">
        <div class="form-wrapper">
          <form id="search-catalogue" class="catalogue-form">
            <div class="search-container">
              <input id="search-catalogue-input" placeholder="'Search by name, category, and menu'">
              <button id="search-catalogue-button" type="submit"><i class="fa-solid fa-magnifying-glass fa-xl"></i></button>
            </div>
            <div class="radio-container">
              <input id="radio-restaurants" name="types" type="radio" value="restaurants" checked>
              <label for="radio-restaurants">Restaurants</label>
              <input id="radio-foods" name="types" type="radio" value="foods">
              <label for="radio-foods">Foods</label>
            </div>
          </form>
        </div>
        <div class="section-container-title">
          <h2 class="headline xl-headline">Restaurant List</h2>
        </div>
        <div id="restaurant-list" class="list">
          ${createArticleSkeleton(20)}
        </div>
      </section>
      <section class="content wrapper">
        <div class="section-container-title">
          <h2 class="headline xl-headline">Food List</h2>
        </div>
        <div id="food-list" class="list">
          ${createArticleSkeleton(5)}
        </div>
      </section>
    </div>
    <div id="foodButton" class="food-logo-container">
      <i class="fa-solid fa-burger fa"></i>
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

      initiator.FoodLogoButton({
        foodList,
        foodButton: document.getElementById('foodButton'),
      });

      setTimeout(() => {
        restaurantList.innerHTML = '';
        foodList.innerHTML = '';

        initiator.searchCatalogue({
          form: document.getElementById('search-catalogue'),
          input: document.getElementById('search-catalogue-input'),
          radio: document.getElementById('radio-restaurants'),
          restaurantList,
          foodList,
        });

        RestaurantDatas.restaurants.forEach((restaurant) => {
          restaurantList.appendChild(createRestaurantArticle(restaurant));
        });

        FoodDatas.foods.forEach((food) => {
          foodList.appendChild(createFoodArticle(food));
        });
      }, 500);
    } catch (err) {
      restaurantList.innerHTML = `<h2>${err.message}<h2>`;
    }
  },

  reqStatus(data) {
    return data.error;
  },
};

export default Catalogue;
