import API_ENDPOINT from '../globals/api-endpoint'

class RestaurantSource {
  static async listRestaurant () {
    const response = await fetch(API_ENDPOINT.LIST)
    return response.json()
  }

  static async detailRestaurant (id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))
<<<<<<< HEAD
    console.log(response)
=======
>>>>>>> master
    return response.json()
  }

  static async addReview (review) {
    const response = await fetch(`${API_ENDPOINT.REVIEW}`, {
      method: 'POST',
      body: JSON.stringify(review),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return response.json()
  }
}

export default RestaurantSource
