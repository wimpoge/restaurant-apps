import FavoriteRestaurantIdb from '../../data/favorite-movie-idb'
import RestaurantSource from '../../data/restaurant-source'
import UrlParser from '../../routes/url-parser'
import UnlikeButtonInitiator from '../../utils/like-button-initiator'
import { createRestaurantDetailTemplate, createUnlikeButtonTemplate } from '../templates/template-creator'

const Detail = {
  async render () {
    return `
    <h2 style="text-align:center">Detail</h2>
    <div id="likeButtonContainer"></div>
    <div id="detailRestaurant"></div>
        `
  },

  async afterRender () {
    const likeButtonContainer = document.querySelector('#likeButtonContainer')
    const detailRestaurant = document.querySelector('#detailRestaurant')
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    try {
      const data = await RestaurantSource.detailRestaurant(url.id)

      likeButtonContainer.innerHTML = createUnlikeButtonTemplate()
      detailRestaurant.innerHTML += createRestaurantDetailTemplate(data.restaurant)

      UnlikeButtonInitiator.init({
        data,
        FavoriteRestaurantIdb,
        likeButtonContainer: document.querySelector('#likeButtonContainer')
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export default Detail
