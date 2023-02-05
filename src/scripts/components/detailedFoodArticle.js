class DetailedFoodArticle extends HTMLElement {
  set data(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.innerHTML = `
    <article class="article-item detailed">
      <div class="img-container food">
        <img class="food-img" src=${this._data.strMealThumb} alt="${this._data.strMeal} image">
      </div>
      <div class="article-content-detailed">
        <h2 class="article-title-food">${this._data.strMeal}</h2>
        <h3 class="article-location">${this._data.strArea}</h3>
        <div class="article-category">
          <h4>Category :</h4>
          <p>${this._data.strCategory}</p>
        </div>
        <div class="article-ingredients">
          <h4>Ingredients:</h4>
          <p> ${this._data.strIngredient1}, ${this._data.strIngredient2}, ${this._data.strIngredient3}
          ${this._data.strIngredient4}, ${this._data.strIngredient5}, ${this._data.strIngredient6}, ${this._data.strIngredient7}
          ${this._data.strIngredient8}, ${this._data.strIngredient9}</p>
        </div>
        <div class="article-instruction-detailed">
            <h4>Instruction: </h4>
            <p>${this._data.strInstructions}</p>
        </div>
      </div>
    </article>
    `;
  }
}

customElements.define('detailed-food-article', DetailedFoodArticle);
