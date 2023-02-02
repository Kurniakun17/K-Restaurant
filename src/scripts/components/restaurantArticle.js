class restaurantArticle extends HTMLElement {
  set data(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.innerHTML = `
    <article class="article-item">
      <div class="img-container">
        <img src=https://restaurant-api.dicoding.dev/images/small/${this._data.pictureId} alt="${this._data.name} image">
      </div>
      <div class="article-content">
      <div class="categories-content">
        <a href="#/detailed/restaurant/${this._data.id}" class="article-title">${this._data.name}</a>
        <h3>★ ${this._data.rating}</h3>
      </div>
      <h4 class="article-location">${this._data.city}</h4>
      <p class="article-description">${this._data.description}</p>
      </div>
    </article>
    `;
  }
}

customElements.define('restaurant-article', restaurantArticle);
