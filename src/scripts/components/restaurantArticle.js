class restaurantArticle extends HTMLElement {
  set data(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.innerHTML = `
    <article class="article-item">
    <div class="img-container">
    <img class="lazyload" src=https://restaurant-api.dicoding.dev/images/small/${this._data.pictureId} alt="${this._data.name} image">
      <picture>
        <source media="(max-width: 600px)" srcset="https://restaurant-api.dicoding.dev/images/small/${this._data.pictureId}">
      </picture>
    </div>
    <div class="article-content">
      <div class="categories-content">
        <h3 class="article-title">${this._data.name}</h3>
        <h3 class="rating">★ ${this._data.rating}</h3>
      </div>
      <h4 class="article-location">${this._data.city}</h4>
      <p class="article-description">${this._data.description}</p>
      <div class="see-more">
        <a href="#/detailed/restaurant/${this._data.id}">Read more...</a>
      </div>
    </div>
  </article>
    `;
  }
}

customElements.define('restaurant-article', restaurantArticle);
