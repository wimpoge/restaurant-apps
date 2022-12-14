import RestaurantSource from '../../data/restaurant-source'
import UrlParser from '../../routes/url-parser'
import { createRestaurantDetailTemplate } from '../templates/template-creator'

const Detail = {
  async render () {
    return `
    <h2 style="text-align:center">Detail</h2>
    <div id="detailRestaurant"></div>
        `
  },

  async afterRender () {
    const detailRestaurant = document.querySelector('#detailRestaurant')
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    try {
      const data = await RestaurantSource.detailRestaurant(url.id)

      detailRestaurant.innerHTML += createRestaurantDetailTemplate(data.restaurant)
    } catch (error) {
      console.log(error)
    }
  }
}

export default Detail
