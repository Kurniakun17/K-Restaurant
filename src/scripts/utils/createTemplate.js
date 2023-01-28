import '../components/restaurantArticle';
import '../components/foodArticle';
import '../components/detailedRestaurantArticle';
import '../components/detailedFoodArticle';

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

export {
  createRestaurantArticle,
  createFoodArticle,
  createDetailedRestaurantArticle,
  createDetailedFoodArticle,
};
