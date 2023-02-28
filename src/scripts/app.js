import routes from './routes/route';
import UrlParser from './routes/urlParser';

class App {
  constructor({ drawer, hamburger, main }) {
    this._drawer = drawer;
    this._hamburger = hamburger;
    this._main = main;

    this._rehydrate();
  }

  _rehydrate() {
    this._hamburger.addEventListener('click', (event) => {
      this._drawer.classList.toggle('open');
      this._hamburger.classList.toggle('open');
      this._main.classList.toggle('blur');
      event.stopPropagation();
    });

    this._main.addEventListener('click', () => {
      this._drawer.classList.remove('open');
      this._hamburger.classList.remove('open');
      this._main.classList.remove('blur');
    });
  }

  async renderPage() {
    const url = UrlParser.ActiveUrlCombiner();
    const page = routes[url];
    this._main.innerHTML = await page.render();
    this._drawer.classList.remove('open');
    this._main.classList.remove('blur');
    this._main.scrollIntoView();
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.getElementById('main-content').focus();
    });

    await page.afterRender();
  }
}

export default App;
