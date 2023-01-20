class restaurantArticles extends HTMLElement{
  set data(data){
    this._data = data
    this.render()
  }

  render(){
    this.innerHTML = `
    <article class="restaurant-item">
      <img src=${this._data.pictureId} alt="${this._data.name} image">
      <div class="restaurant-content">
        <a href="#">${this._data.name}</a>
        <h4 class="restaurant-location">${this._data.city}</h4>
        <h5>Rating : ${this._data.rating}</h5>
        <p>${this._data.description}</p>
      </div>
    </article>
    `
  }
}

customElements.define('restaurant-article', restaurantArticles)