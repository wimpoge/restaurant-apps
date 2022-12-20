<<<<<<< HEAD
import FavoriteRestaurantIdb from '../data/favorite-movie-idb'
import { createLikeButtonTemplate, createUnlikeButtonTemplate } from '../views/templates/template-creator'

/* eslint-disable no-irregular-whitespace */
const UnlikeButtonInitiator = {
=======
import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb'
import { createLikeButtonTemplate, createUnlikeButtonTemplate } from '../views/templates/template-creator'

/* eslint-disable no-irregular-whitespace */
const LikeButtonInitiator = {
>>>>>>> master
  async init ({ likeButtonContainer, data }) {
    this._likeButtonContainer = likeButtonContainer
    this._restaurant = data.restaurant

    await this._renderButton()
  },

  async _renderButton () {
    try {
      const { id } = this._restaurant

      // get resto in indexed db
      const restaurant = await FavoriteRestaurantIdb.getRestaurant(id)

      if (restaurant) {
        this._renderLikedButtonTemplate()
      } else {
        this._renderLikeButtonTemplate()
      }
    } catch (err) {
      console.error(err)

      throw new Error(err)
    }
  },

  _renderLikeButtonTemplate () {
    this._likeButtonContainer.innerHTML = createUnlikeButtonTemplate() // append html

    const likeButton = document.querySelector('#likeButton')

    likeButton.addEventListener('click', async () => {
      // onClick fav the selected resto
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant)
      this._renderButton()
    })
  },

  _renderLikedButtonTemplate () {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate() // append html

    const likeButton = document.querySelector('#likeButton')

    likeButton.addEventListener('click', async () => {
      // onClick unfav the selected resto
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id)
      this._renderButton()
    })
  }
}

<<<<<<< HEAD
export default UnlikeButtonInitiator
=======
export default LikeButtonInitiator
>>>>>>> master
