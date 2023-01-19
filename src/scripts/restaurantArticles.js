class restaurantArticles extends HTMLElement{
  set data(data){
    this._data = data
    this.render()
  }

  render(){
    this.innerHTML = `
    <article class="restaurant-item">
      <img src=${this._data.pictureId}>
      <div class="restaurant-content">
        <h3>${this._data.name}</h3>
        <h4 class="restaurant-location">${this._data.city}</h4>
        <p>${this._data.description}</p>
      </div>
    </article>
    `
  }
}

customElements.define('restaurant-article', restaurantArticles)