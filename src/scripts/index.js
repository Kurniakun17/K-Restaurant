import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './app';

const app = new App({
  drawer: document.getElementById('drawer'),
  hamburger: document.getElementById('hamburger'),
  main: document.getElementById('main'),
});

window.addEventListener('load', () => {
  app.renderPage();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
