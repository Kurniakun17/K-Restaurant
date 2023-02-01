import favDatas from '../data/fav-datas';
import config from '../globals/config';
import UrlParser from '../routes/urlParser';
import { createFavButton, createFavedButton } from './createTemplate';

const initiator = {
  async Form(id) {
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

  async FavButton(data) {
    this._id = data.id;
    this._data = data;
    this._favContainer = document.getElementById('fav-container');
    this._url = UrlParser.ActiveUrlWithoutCombiner();
    this._objectStoreName = `${this._url.type}s`;

    await this._renderButton();
  },

  async _renderButton() {
    if (await favDatas.getData(this._objectStoreName, this._id)) {
      this._renderFaved();
    } else {
      this._renderFav();
    }
  },

  _renderFav() {
    this._favContainer.innerHTML = createFavButton();
    const favButton = document.getElementById('fav-button');
    favButton.addEventListener('click', () => {
      favDatas.putData(this._objectStoreName, this._data);
      this._renderButton();
    });
  },

  _renderFaved() {
    this._favContainer.innerHTML = createFavedButton();
    const favButton = document.getElementById('fav-button');
    favButton.addEventListener('click', () => {
      favDatas.deleteData(this._objectStoreName, this._id);
      this._renderButton();
    });
  },
};

export default initiator;
