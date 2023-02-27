import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/article.css';
import '../styles/responsive.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
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
