class DetailedRestaurantArticle extends HTMLElement {
  set data(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.innerHTML = `
    <article class="article-item">
      <img src=https://restaurant-api.dicoding.dev/images/small/${this._data.pictureId} alt="${this._data.name} image">
      <div class="article-content">
        <a href="#/detailed/restaurant/${this._data.id}" class="article-title">${this._data.name}</a>
        <h4 class="article-location">${this._data.city}</h4>
        <h5>Rating : ${this._data.rating}</h5>
        <p>${this._data.description}</p>
      </div>
    </article>
    `;
  }
}

customElements.define('detailed-restaurant-article', DetailedRestaurantArticle);
