import App from '../src/scripts/app';

describe('Clicking hamburger button', () => {
  const createNavbar = () => {
    document.body.innerHTML = `
    <header>
      <a href="#main-content" class="skip-link" tabindex="0">Skip to content</a>
      <nav class="nav-bar wrapper">
        <div class="hamburger-container">
          <button href="#" id="hamburger">☰</button>
        </div>
        <ul id="drawer" class="nav-list">
          <li>
            <a href="/" class="nav-item">Home</a>
          </li>
          <li>
            <a href="#/favorite" class="nav-item">Favorite</a>
          </li>
          <li>
            <a class="nav-item" href="https://id.linkedin.com/in/kurnia-kharisma-agung-samiadjie-88b54a224">About Us</a>
          </li>
        </ul>
      </nav>
    </header>
    <main id="main">
    </main>`;
  };

  beforeEach(() => {
    createNavbar();
    // eslint-disable-next-line no-undef
    // viewport.set('mobile');
    // eslint-disable-next-line no-unused-vars
    const app = new App({
      drawer: document.getElementById('drawer'),
      hamburger: document.getElementById('hamburger'),
      main: document.getElementById('main'),
    });
  });

  it('Should contain open class on drawer when hamburger button clicked', async () => {
    const drawer = document.getElementById('drawer');
    const hamburger = document.getElementById('hamburger');

    hamburger.dispatchEvent(new Event('click'));

    expect(drawer.classList.contains('open')).toBeTruthy();
  });

  it('Should contain blur class on main when hamburger button clicked ', () => {
    const hamburger = document.getElementById('hamburger');

    hamburger.dispatchEvent(new Event('click'));

    expect(document.getElementById('main').classList.contains('blur')).toBeTruthy();
  });

  it('Should not contain open class on drawer when main clicked', () => {
    const drawer = document.getElementById('drawer');
    const hamburger = document.getElementById('hamburger');

    hamburger.dispatchEvent(new Event('click'));

    document.getElementById('main').dispatchEvent(new Event('click'));

    expect(drawer.classList.contains('open')).toBeFalsy();
  });

  it('Should not contain blur class on main when hamburger clicked', () => {
    const hamburger = document.getElementById('hamburger');
    const main = document.getElementById('main');
    hamburger.dispatchEvent(new Event('click'));
    console.log();

    main.dispatchEvent(new Event('click'));

    expect(main.classList.contains('blur')).toBeFalsy();
  });
});
