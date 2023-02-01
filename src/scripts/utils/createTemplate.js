import '../components/restaurantArticle';
import '../components/foodArticle';
import '../components/detailedRestaurantArticle';
import '../components/detailedFoodArticle';
import '../components/review';

const createRestaurantArticle = (restaurant) => {
  const restaurantArticle = document.createElement('restaurant-article');
  restaurantArticle.data = restaurant;
  return restaurantArticle;
};

const createFoodArticle = (food) => {
  const foodArticle = document.createElement('food-article');
  foodArticle.data = food;
  return foodArticle;
};

const createDetailedRestaurantArticle = (restaurant) => {
  const detailedRestaurantArticle = document.createElement('detailed-restaurant-article');
  detailedRestaurantArticle.data = restaurant;
  return detailedRestaurantArticle;
};

const createDetailedFoodArticle = (food) => {
  const detailedFoodArticle = document.createElement('detailed-food-article');
  detailedFoodArticle.data = food;
  return detailedFoodArticle;
};

const createReview = (data) => {
  const reviewComponent = document.createElement('review-component');
  reviewComponent.data = data;
  return reviewComponent;
};

const createFavButton = () => `
  <button id="fav-button" class="fav-container">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createFavedButton = () => `
  <button id="fav-button" class="fav-container">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantArticle,
  createFoodArticle,
  createDetailedRestaurantArticle,
  createDetailedFoodArticle,
  createReview,
  createFavButton,
  createFavedButton,
};
