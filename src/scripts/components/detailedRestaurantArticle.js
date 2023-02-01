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
          <div class="categories-content">
            <a href="#/detailed/restaurant/${this._data.id}" class="article-title">${this._data.name}</a>
            <h3>${this._data.rating}★</h3>
          </div>
          <h4 class="article-location">${this._data.city}</h4>
          <h5 class="article-categories">Categories : ${this._data.categories.map((category) => `<span> ${category.name}</span>`)}.</h5>
          <p>${this._data.description}</p>
          <div class="menus-container">
            <h3 class="headline">Menus</h3>
            <div class="menus-item-container">
              <h4 class="menus-item-title">Foods</h4>  
              <p>
                ${this._data.menus.foods.map((food) => `<span> ${food.name}</span>`)}.
              </p>
            </div>
            <div class="menus-item-container">
                <h4 class="menus-item-title">Drinks</h4>
                <p class="">
                  ${this._data.menus.drinks.map((drink) => `<span> ${drink.name}</span>`)}.
                </p>
              </div>
          </div>
          <div class="review-container">
            <h3 class="headline">Reviews</h3>
            <div class="review-item-container">
              ${this._data.customerReviews.map((data) => (
    `<div class="review-item">
        <h4>${data.name}</h4>
        <h5>${data.date}</h5>
        <p>${data.review}</p>
    </div>`
  )).join('')}
            </div>
        </div>
        <div class="review-form" >
        <h3 class="headline">Send Review</h3>
          <form id="form" class="form">
            <input id="nama" placeholder="nama" min="1"></input>
            <input id="review" placeholder="review" min="2"></input>
            <button type="submit">Submit</button>
          </form>
        </div>
      </article>
    `;
  }
}

customElements.define('detailed-restaurant-article', DetailedRestaurantArticle);
