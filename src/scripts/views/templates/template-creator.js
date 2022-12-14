import CONFIG from '../../globals/config'

const createRestaurantItemTemplate = (restaurant) => `
<div class="restauran-card">
    <div class="restauran-card__header">
        <img
            src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}"
            alt='${restaurant.name} Image'
            width="50%"
        />
        <a rel="noreferrer" href="/#/detail/${restaurant.id}" class="restauran-card_link">${restaurant.name}</a>
        <h4">${restaurant.city}</h4>
    </div>   
    
    <div class="restauran-card__body">
    <b>${restaurant.rating}</b>
        <p>
            ${restaurant.description.slice(0, 200)}...
        </p>
    </div>
</div>
  `

const createRestaurantDetailTemplate = (restaurant) => `
<div class="restauran-card_detail">
<h3 style="text-align:center">${restaurant.name}</h3>
<img src="${CONFIG.BASE_IMAGE_URL_SM}/${restaurant.pictureId}" alt="${restaurant.name} Gambar"/>
<p style="text-align:center">${restaurant.address}</p>
<p style="text-align:center">${restaurant.city}</p>
<p>${restaurant.description}</p>

<div class="restauran-card_detail_menu">
<h3>Menu</h3>

<div>
<h4>Food</h4>
<ul>${restaurant.menus.foods.map((food, i) => `<li><p>${i + 1}) ${food.name}</p></li>`).join('')}</ul>
</div>

<div>
<h4>Drink</h4>
<ul>${restaurant.menus.drinks.map((drink, i) => `<li><p>${i + 1}) ${drink.name}</p></li>`).join('')}<ul>
</div>
</div>
</div>

<div>
<h3 style="text-align:center">Review</h3>
<ul>
${restaurant.customerReviews.map((review) => `
   <div class="restauran-card_detail_review">
   <h2 class="review-name">${review.name}</h2>
   <p class="review-date">${review.date}</p>
   <span>${review.review}</span>
   </div>
    `
    ).join('')}
    </ul>

</div>
</div>
  `

const createLikeButtonTemplate = () => `
  <button type="button" id="likeButton" class="font-pp-semi-bold flex items-center justify-center" aria-label="like this restaurant">
    <img
      src="${CONFIG.BASE_EXTERNAL_IMG_URL}/heart-green-outline_lntkci.svg"
      width="16"
      class="mr-2"
    /> Add to Favorites
  </button>
`

const createUnlikeButtonTemplate = () => `
  <button type="button" id="likeButton" class="font-pp-semi-bold flex items-center justify-center" aria-label="unlike this restaurant">
    <img
      src="${CONFIG.BASE_EXTERNAL_IMG_URL}/heart-green_mpqrwo.svg"
      width="16"
      class="mr-2"
    /> Liked!
  </button>
`

const createFavoriteRestaurantItemTemplate = (restaurant) => `
  <div class="favorite-restaurant-card">
    <div class="favorite-restaurant-card__img-container">
      <a rel="noreferrer" href="#/detail/${restaurant.id}">
        <img src="${CONFIG.BASE_IMG_URL}/${restaurant.pictureId}" />
      </a>
    </div>
    <div class="favorite-restaurant-card__body">
        <a rel="noreferrer" href="#/detail/${restaurant.id
  }" class="text-decoration-none">
          <h2><span class="favorite-restaurant-card__name">${restaurant.name
  }</span> - ${restaurant.city}</h2>
        </a>
        <p>${restaurant.description.slice(0, 80)}...</p>
        <div class="favorite-restaurant-card__body-footer flex items-center justify-between">
          <div class="favorite-restaurant-card__body-rating flex items-center">
            <img
              src="${CONFIG.BASE_EXTERNAL_IMG_URL}/star_3_jqy0go.svg"
              alt="Star Icon"
              width="16"
              class="mr-1"
            /><p class="font-pp-medium">${restaurant.rating}</p>
          </div>
          <button class="favorite-restaurant-card__body-remove-favorite" data-id="${restaurant.id
  }">
            <img src="${CONFIG.BASE_EXTERNAL_IMG_URL
  }/trash-grey-outline_nymsm6.svg" width="20" />
          </button>
        </div>
    </div>
  </div>
`

export {
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createFavoriteRestaurantItemTemplate
}
