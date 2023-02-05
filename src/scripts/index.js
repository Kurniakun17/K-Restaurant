import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './app';
import serviceWorkerRegister from './utils/serviceWorkerResgister';

const app = new App({
  drawer: document.getElementById('drawer'),
  hamburger: document.getElementById('hamburger'),
  main: document.getElementById('main'),
});

window.addEventListener('load', () => {
  app.renderPage();
  serviceWorkerRegister();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
