class FoodArticle extends HTMLElement {
  set data(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.innerHTML = `
    <article class="article-item">
      <div class="img-container">
        <img class="food-img lazyload" src=${this._data.strMealThumb} alt="${this._data.strMeal} image">
        <div class="location-container">
          <h4 class="article-location">${this._data.strArea}</h4>
        </div>
      </div>  
      <div class="article-content">
        <h3 class="article-title-food">${this._data.strMeal}</h3>
        <h5>Category :</h5>
        <p>${this._data.strCategory}</p>
        <h5>Ingredients:</h5>
        <p class="article-item-ingredients"> ${this._data.strIngredient1}, ${this._data.strIngredient2}, ${this._data.strIngredient3}
        ${this._data.strIngredient4}, ${this._data.strIngredient5}, ${this._data.strIngredient6}, ${this._data.strIngredient7}
        ${this._data.strIngredient8}, ${this._data.strIngredient9}</p>
        <div class="see-more">
          <a href="#/detailed/food/${this._data.idMeal}">Read more...</a>
        </div>
      </div>
    </article>
    `;
  }
}

customElements.define('food-article', FoodArticle);
