import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import './component/app-bar.js'
import './component/footer.js'
// import '../../view/main.js';
import App from './views/app'
import swRegister from './utils/sw-register'

const app = new App({
  button: document.querySelector('#nav'),
  drawer: document.querySelector('#myTopnav'),
  content: document.querySelector('#main-content')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})
