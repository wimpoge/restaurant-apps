<<<<<<< HEAD
import FavoriteRestaurantIdb from '../../data/favorite-movie-idb'
import RestaurantSource from '../../data/restaurant-source'
import UrlParser from '../../routes/url-parser'
import UnlikeButtonInitiator from '../../utils/like-button-initiator'
=======
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb'
import RestaurantSource from '../../data/restaurant-source'
import UrlParser from '../../routes/url-parser'
import LikeButtonInitiator from '../../utils/like-button-initiator'
>>>>>>> master
import { createRestaurantDetailTemplate, createUnlikeButtonTemplate } from '../templates/template-creator'

const Detail = {
  async render () {
    return `
<<<<<<< HEAD
    <h2 style="text-align:center">Detail</h2>
    <div id="likeButtonContainer"></div>
    <div id="detailRestaurant"></div>
=======
    <div>
    <h2 style="text-align:center">Detail</h2>
    <div id="loading" style="text-align: center; margin-top: 25%; margin-bottom: 25%;">loading...</div>
    <div id="likeButtonContainer"></div>
    <div id="detailRestaurant"></div>
    </div>
>>>>>>> master
        `
  },

  async afterRender () {
<<<<<<< HEAD
=======
    const loading = document.querySelector('#loading')
>>>>>>> master
    const likeButtonContainer = document.querySelector('#likeButtonContainer')
    const detailRestaurant = document.querySelector('#detailRestaurant')
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    try {
      const data = await RestaurantSource.detailRestaurant(url.id)

      likeButtonContainer.innerHTML = createUnlikeButtonTemplate()
      detailRestaurant.innerHTML += createRestaurantDetailTemplate(data.restaurant)

<<<<<<< HEAD
      UnlikeButtonInitiator.init({
=======
      LikeButtonInitiator.init({
>>>>>>> master
        data,
        FavoriteRestaurantIdb,
        likeButtonContainer: document.querySelector('#likeButtonContainer')
      })
<<<<<<< HEAD
=======
      loading.style.display = 'none'
>>>>>>> master
    } catch (error) {
      console.log(error)
    }
  }
}

export default Detail
