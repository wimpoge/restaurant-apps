import CONFIG from '../../globals/config'

const createRestaurantItemTemplate = (restaurant) => `
<div class="restauran-card">
    <div class="restauran-card__header">
        <img
            src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}"
            alt='${restaurant.name} Image'
<<<<<<< HEAD
            width="50%"
        />
        <a rel="noreferrer" href="/#/detail/${restaurant.id}" class="restauran-card_link">${restaurant.name}</a>
        <h4">${restaurant.city}</h4>
=======
            width="100" height="100"
        />
        <a rel="noreferrer" href="/#/detail/${restaurant.id}" id="restauran-card_link" class="restauran-card_link" style="min-width: 44px; min-height: 44px;">${restaurant.name}</a>
        <h4 width="50" height="10">${restaurant.city}</h4>
>>>>>>> master
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
<<<<<<< HEAD
<img src="${CONFIG.BASE_IMAGE_URL_SM}/${restaurant.pictureId}" alt="${restaurant.name} Gambar"/>
=======
<img src="${CONFIG.BASE_IMAGE_URL_SM}/${restaurant.pictureId}" alt="${restaurant.name} Gambar" style="width: 100%"/>
>>>>>>> master
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

const createUnlikeButtonTemplate = () => `
  <button type="button" aria-label="like this page" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createLikeButtonTemplate = () => `
<<<<<<< HEAD
  <button aria-label="unlike this movie" id="likeButton" class="like">
=======
  <button aria-label="unlike this Restaurant" id="likeButton" class="like">
>>>>>>> master
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export {
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate
}
