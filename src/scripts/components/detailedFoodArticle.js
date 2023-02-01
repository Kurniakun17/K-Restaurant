class DetailedFoodArticle extends HTMLElement {
  set data(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.innerHTML = `
    <article class="article-item">
      <img class="food-img" src=${this._data.strMealThumb} alt="${this._data.strMeal} image">
      <div class="article-content">
        <a href="#/detailed/food/${this._data.idMeal}" class="article-title">${this._data.strMeal}</a>
        <h4 class="article-location">${this._data.strArea}</h4>
        <h5>Category :</h5>
        <p>${this._data.strCategory}</p>
        <h5>Ingredients:</h5>
        <p> ${this._data.strIngredient1}, ${this._data.strIngredient2}, ${this._data.strIngredient3}
        ${this._data.strIngredient4}, ${this._data.strIngredient5}, ${this._data.strIngredient6}, ${this._data.strIngredient7}
        ${this._data.strIngredient8}, ${this._data.strIngredient9}</p>
        <h5>Instruction: </h5>
        <p>${this._data.strInstructions}</p>
      </div>
    </article>
    `;
  }
}

customElements.define('detailed-food-article', DetailedFoodArticle);
