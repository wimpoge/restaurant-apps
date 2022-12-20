import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
<<<<<<< HEAD
=======
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
>>>>>>> master
import './component/app-bar.js'
import './component/footer.js'
// import '../../view/main.js';
import App from './views/app'
<<<<<<< HEAD
=======
import swRegister from './utils/sw-register'
>>>>>>> master

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
<<<<<<< HEAD
=======
  swRegister()
>>>>>>> master
})
