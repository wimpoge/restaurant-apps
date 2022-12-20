import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb'
import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator'

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurantIdb: FavoriteRestaurantIdb,
    data: {
      restaurant
    }
  })
}

export { createLikeButtonPresenterWithRestaurant }
