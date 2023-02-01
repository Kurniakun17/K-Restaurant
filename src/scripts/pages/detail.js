import config from '../globals/config';
import UrlParser from '../routes/urlParser';
import FoodData from '../../FOODDATA.json';
import { createDetailedFoodArticle, createDetailedRestaurantArticle } from '../utils/createTemplate';

const Detail = {
  async render() {
    return (
      `
        <div id="container"></div>
      `
    );
  },

  async _initForm(id) {
    const form = document.getElementById('form');
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const nama = document.getElementById('nama').value;
      const review = document.getElementById('review').value;
      if (review === '' || nama === '') {
        // eslint-disable-next-line no-alert
        return alert('name or review cannot be null');
      }
      const reviewData = { id, name: nama, review };
      const error = await fetch(`${config.base_url}/review`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      });
      const res = await error.json();
      const reviewContainer = document.getElementsByClassName('review-item-container')[0];
      reviewContainer.innerHTML = `
        ${res.customerReviews.map((reviewItem) => (
    `<div class="review-item">
              <h4>${reviewItem.name}</h4>
              <h5>${reviewItem.date}</h5>
              <p>${reviewItem.review}</p>
          </div>`
  )).join('')}
      `;
      return res;
    });
  },

  // async _initLikeButton(id) {
  //   const likeButton = document.getElementById('fav-button');
  //   likeButton.addEventListener('click', () => {

  //   });
  // },

  async afterRender() {
    const url = UrlParser.ActiveUrlWithoutCombiner();
    const container = document.getElementById('container');

    if (this._isRestaurant(url.type)) {
      const data = await (await fetch(`${config.base_url}/detail/${url.id}`)).json();
      container.appendChild(createDetailedRestaurantArticle(data.restaurant));
      const rehydrate = () => {
        this._initForm(url.id);
        // this._initLikeButton(url.id);
      };

      return rehydrate();
    }
    const data = FoodData.foods.filter((food) => food.idMeal === url.id)[0];
    return container.appendChild(createDetailedFoodArticle(data));
  },

  _isRestaurant(type) {
    return (type === 'restaurant');
  },
};

export default Detail;
