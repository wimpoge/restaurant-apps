import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './component/app-bar.js';
import './component/footer.js';
import '../../view/main.js';
import App from './views/app';

const app = new App({
    button: document.querySelector('#myTopnav'),
    drawer: document.querySelector('#app-bar-menu'),
    content: document.querySelector('#listRestaurant'),
  });

  window.addEventListener('hashchange', () => {
    app.renderPage();
  });

  window.addEventListener('load', () => {
    app.renderPage();
  });