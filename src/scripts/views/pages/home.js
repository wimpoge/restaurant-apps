import RestaurantSource from '../../data/restaurant-source'
import { createRestaurantItemTemplate } from '../templates/template-creator'

const Home = {
  async render () {
    return `
    <div id="query">
    <h2 style="text-align:center;">Cari Restaurant</h2>
    <div id="loading" style="text-align: center; margin-top: 25%; margin-bottom: 25%;">loading...</div>
    <div id="listRestaurant"></div>
    </div>
      `
  },

  async afterRender () {
    const loading = document.querySelector('#loading')
    const listRestaurant = document.querySelector('#listRestaurant')

    try {
      const data = await RestaurantSource.listRestaurant()
      data.restaurants.forEach((restaurant) => {
        listRestaurant.innerHTML += createRestaurantItemTemplate(restaurant)
      })
      loading.style.display = 'none'
    } catch (error) {
      console.log(error)
    }
  }
}

export default Home
