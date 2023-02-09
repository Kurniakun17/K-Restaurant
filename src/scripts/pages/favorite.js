import favDatas from '../data/fav-datas';
import { createFoodArticle, createRestaurantArticle } from '../utils/createTemplate';

const Favorite = {
  async render() {
    return (
      `
      <div class="hero favorite">
        <div class="hero-content-container wrapper">
          <h1 class="hero-title">Favorites Foods and Restaurants!</h1>
        </div>
        </div>
      <div id="main-content" tabindex="0">
        <section class="content wrapper">
        <div id="fav-restaurant" class="fav-restaurant">
          <div class="section-container-title">
            <h2 class="headline">Restaurants</h2>
          </div>
          <div id="fav-restaurant-list" class="list"></div>
        </div>
        <div id="fav-food" class="fav-food">
          <div class="section-container-title">
            <h2 class="headline">Foods</h2>
          </div>
          <div id="fav-food-list" class="list"></div>
        </div>
      </section>  
      </div>
    `);
  },

  async afterRender() {
    const restaurantData = await favDatas.getAllDatas('restaurants');
    const foodData = await favDatas.getAllDatas('foods');
    const restaurantList = document.getElementById('fav-restaurant-list');
    const foodList = document.getElementById('fav-food-list');

    if (restaurantData.length === 0) {
      restaurantList.classList.add('empty');
      restaurantList.innerHTML = `
          <h2>Empty Favorite Restaurants!</h2>
      `;
    } else {
      restaurantData.forEach(
        (restaurant) => restaurantList.appendChild(createRestaurantArticle(restaurant)),
      );
    }

    if (foodData.length === 0) {
      foodList.classList.add('empty');
      foodList.innerHTML = `
        <h2>Empty Favorite Foods!</h2>
      `;
    } else {
      foodData.forEach(
        (food) => foodList.appendChild(createFoodArticle(food)),
      );
    }
  },
};

export default Favorite;
