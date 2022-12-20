import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb'
import RestaurantSource from '../../data/restaurant-source'
import UrlParser from '../../routes/url-parser'
import LikeButtonInitiator from '../../utils/like-button-initiator'
import { createRestaurantDetailTemplate, createUnlikeButtonTemplate } from '../templates/template-creator'

const Detail = {
  async render () {
    return `
    <div>
    <h2 style="text-align:center">Detail</h2>
    <div id="loading" style="text-align: center; margin-top: 25%; margin-bottom: 25%;">loading...</div>
    <div id="likeButtonContainer"></div>
    <div id="detailRestaurant"></div>
    </div>
        `
  },

  async afterRender () {
    const loading = document.querySelector('#loading')
    const likeButtonContainer = document.querySelector('#likeButtonContainer')
    const detailRestaurant = document.querySelector('#detailRestaurant')
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    try {
      const data = await RestaurantSource.detailRestaurant(url.id)

      likeButtonContainer.innerHTML = createUnlikeButtonTemplate()
      detailRestaurant.innerHTML += createRestaurantDetailTemplate(data.restaurant)

      LikeButtonInitiator.init({
        data,
        FavoriteRestaurantIdb,
        likeButtonContainer: document.querySelector('#likeButtonContainer')
      })
      loading.style.display = 'none'
    } catch (error) {
      console.log(error)
    }
  }
}

export default Detail
