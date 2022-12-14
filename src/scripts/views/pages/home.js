import RestaurantSource from '../../data/restaurant-source'
import { createRestaurantItemTemplate } from '../templates/template-creator'

const Home = {
  async render () {
    return `
    <div>
    <h2 style="text-align:center">Cari Restaurant</h2>
    <div id="listRestaurant"></div>
    </div>
      `
  },

  async afterRender () {
    const listRestaurant = document.querySelector('#listRestaurant')

    try {
      const data = await RestaurantSource.listRestaurant()
      data.restaurants.forEach((restaurant) => {
        listRestaurant.innerHTML += createRestaurantItemTemplate(restaurant)
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export default Home
