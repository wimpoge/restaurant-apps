<<<<<<< HEAD
import FavoriteRestaurantIdb from '../../data/favorite-movie-idb'
=======
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb'
>>>>>>> master
import { createRestaurantItemTemplate } from '../templates/template-creator'

const Favorite = {
  async render () {
    return `
<<<<<<< HEAD
        <h2 style="text-align:center">Favorite Page</h2>
        <div id="favorite"></div>
=======
    <div>
    <h2 style="text-align:center">Favorite Page</h2>
    <div id="loading" style="text-align: center; margin-top: 25%; margin-bottom: 25%;">loading...</div>
    <div id="favorite"></div>
    </div>
>>>>>>> master
      `
  },

  async afterRender () {
    const favoriteRestaurant = document.querySelector('#favorite')
<<<<<<< HEAD
    const data = await FavoriteRestaurantIdb.getAllRestaurant()

    if (data.length === 0) {
      favoriteRestaurant.innerHTML = "<span style='display: flex; align-items: center; justify-content: center; padding: 5%'>Halaman Favorite Kosong.</span>"
    }

    data.forEach((restaurant) => {
      favoriteRestaurant.innerHTML += createRestaurantItemTemplate(restaurant)
    })
=======
    const loading = document.querySelector('#loading')

    try {
      const data = await FavoriteRestaurantIdb.getAllRestaurant()
      if (data.length === 0) {
        favoriteRestaurant.innerHTML = "<span class='empty-favorite' style='display: flex; align-items: center; justify-content: center; padding: 5%'>Halaman Favorite Kosong.</span>"
      }

      data.forEach((restaurant) => {
        favoriteRestaurant.innerHTML += createRestaurantItemTemplate(restaurant)
      })
      loading.style.display = 'none'
    } catch (error) {
      console.log(error)
    }
>>>>>>> master
  }
}

export default Favorite
