import FavoriteRestaurantIdb from '../../data/favorite-movie-idb'
import { createRestaurantItemTemplate } from '../templates/template-creator'

const Favorite = {
  async render () {
    return `
        <h2 style="text-align:center">Favorite Page</h2>
        <div id="favorite"></div>
      `
  },

  async afterRender () {
    const favoriteRestaurant = document.querySelector('#favorite')
    const data = await FavoriteRestaurantIdb.getAllRestaurant()

    if (data.length === 0) {
      favoriteRestaurant.innerHTML = "<span style='display: flex; align-items: center; justify-content: center; padding: 5%'>Halaman Favorite Kosong.</span>"
    }

    data.forEach((restaurant) => {
      favoriteRestaurant.innerHTML += createRestaurantItemTemplate(restaurant)
    })
  }
}

export default Favorite
