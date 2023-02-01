class Review extends HTMLElement {
  set data(data) {
    this._data = data;
    console.log(this._data);
    this.render();
  }

  render() {
    this.innerHTML = `
      <div></div>
    `;
  }
}

customElements.define('review-component', Review);

export default Review;
