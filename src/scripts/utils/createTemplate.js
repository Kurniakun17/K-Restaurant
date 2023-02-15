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

const createArticleSkeleton = (num) => {
  let allSkeletonTemplate = '';
  for (let i = 0; i < num; i += 1) {
    allSkeletonTemplate += `
    <article class="article-item">
      <div class="img-container">
        <img class="skeleton">
      </div>
      <div class="article-content">
        <div class="categories-content skeleton">
          <h3 class="article-title skeleton skeleton-text"></h3>
          <h3 class="rating skeleton skeleton-text"></h3>
        </div>
        <h4 class="article-location skeleton skeleton-text"></h4>
        <div class="skeleton-description">
          <p class="article-description skeleton skeleton-text"></p>
          <p class="article-description skeleton skeleton-text"></p>
          <p class="article-description skeleton skeleton-text"></p>
          <p class="article-description skeleton skeleton-text last"></p>
        </div>
        <div class="see-more">
          <p class="skeleton skeleton-text"></p>
        </div>
      </div>
    </article>
    `;
  }
  return allSkeletonTemplate;
};

export {
  createRestaurantArticle,
  createFoodArticle,
  createDetailedRestaurantArticle,
  createDetailedFoodArticle,
  createReview,
  createFavButton,
  createFavedButton,
  createArticleSkeleton,
};
