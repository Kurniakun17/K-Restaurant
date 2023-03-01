import config from '../globals/config';
import UrlParser from '../routes/urlParser';
import {
  createFavButton, createFavedButton, createFoodArticle, createRestaurantArticle,
} from './createTemplate';
import FoodDatas from '../../FOODDATA.json';

const initiator = {
  async Form(id) {
    const form = document.getElementById('form');
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const nama = document.getElementById('nama');
      const review = document.getElementById('review');
      if (review === '' || nama === '') {
        // eslint-disable-next-line no-alert
        return alert('name or review cannot be null');
      }
      const reviewData = { id, name: nama.value, review: review.value };
      const error = await fetch(`${config.base_url}/review`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      });
      let res = await error.json();
      res = res.customerReviews.reverse();
      const reviewContainer = document.getElementsByClassName('review-item-container')[0];
      reviewContainer.innerHTML = `
        ${res.map((reviewItem) => (
    `<div class="review-item">
              <h4>${reviewItem.name}</h4>
              <h5>${reviewItem.date}</h5>
              <p>${reviewItem.review}</p>
          </div>`
  )).join('')}
      `;

      nama.value = '';
      review.value = '';
      return res;
    });
  },

  async searchCatalogue(data) {
    this._form = data.form;
    this._input = data.input;
    this._radio = data.radio;
    this._restaurantList = data.restaurantList;
    this._foodList = data.foodList;

    this._form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (this._radio.checked) {
        const fetchData = this._input.value ? await (await fetch(`${config.base_url}/search?q=${this._input.value}`)).json() : await (await fetch(`${config.base_url}/list`)).json();
        this._restaurantList.innerHTML = '';
        fetchData.restaurants.forEach((restaurant) => {
          this._restaurantList.appendChild(createRestaurantArticle(restaurant));
        });
      } else {
        // eslint-disable-next-line max-len
        const filteredDatas = FoodDatas.foods.filter((food) => food.strMeal.toLowerCase().includes(this._input.value.toLowerCase()));
        this._foodList.innerHTML = '';
        filteredDatas.forEach((food) => {
          this._foodList.appendChild(createFoodArticle(food));
        });
        this._foodList.scrollIntoView({ behavior: 'smooth' });
      }
    });
  },

  FoodLogoButton(data) {
    data.foodButton.addEventListener('click', () => {
      data.foodList.scrollIntoView({ behavior: 'smooth' });
    });
  },

  async FavButton(data, favDataModel) {
    this._id = data.id;
    this._data = data;
    this._favContainer = document.getElementById('fav-container');
    this._url = UrlParser.ActiveUrlWithoutCombiner();
    this._favDatas = favDataModel;
    this._objectStoreName = data.type;

    await this._renderButton();
  },

  async _renderButton() {
    if (await this._favDatas.getData(this._objectStoreName, this._id)) {
      this._renderFaved();
    } else {
      this._renderFav();
    }
  },

  _renderFav() {
    this._favContainer.innerHTML = createFavButton();
    const favButton = document.getElementById('fav-button');
    favButton.setAttribute('aria-label', 'add to favorite');
    favButton.addEventListener('click', () => {
      this._favDatas.putData(this._objectStoreName, this._data);
      this._renderButton();
    });
  },

  _renderFaved() {
    this._favContainer.innerHTML = createFavedButton();
    const favButton = document.getElementById('fav-button');
    favButton.setAttribute('aria-label', 'remove from favorite');
    favButton.addEventListener('click', () => {
      this._favDatas.deleteData(this._objectStoreName, this._id);
      this._renderButton();
    });
  },
};

export default initiator;
