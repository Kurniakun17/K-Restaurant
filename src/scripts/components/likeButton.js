class LikeButton {
  constructor() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <i class="fa fa-heart" aria-hidden="true"></i>
    `;
  }
}

export default LikeButton;
