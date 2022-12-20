import RestaurantSource from '../../data/restaurant-source'
import { createRestaurantItemTemplate } from '../templates/template-creator'

const Home = {
  async render () {
    return `
<<<<<<< HEAD
    <div>
    <h2 style="text-align:center">Cari Restaurant</h2>
=======
    <div id="query">
    <h2 style="text-align:center;">Cari Restaurant</h2>
    <div id="loading" style="text-align: center; margin-top: 25%; margin-bottom: 25%;">loading...</div>
>>>>>>> master
    <div id="listRestaurant"></div>
    </div>
      `
  },

  async afterRender () {
<<<<<<< HEAD
=======
    const loading = document.querySelector('#loading')
>>>>>>> master
    const listRestaurant = document.querySelector('#listRestaurant')

    try {
      const data = await RestaurantSource.listRestaurant()
      data.restaurants.forEach((restaurant) => {
        listRestaurant.innerHTML += createRestaurantItemTemplate(restaurant)
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

export default Home
