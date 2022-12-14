import data from '../src/DATA.json'

let html = ''
data.restaurants.forEach((resto) => {
  html += `
    <div class="wrapper">
        <div class="card-body">
            <img class="" src="${resto.pictureId}" alt="restoran yang berada di ${resto.city}" /> <br>
            <span class="label-city">${resto.city}</span> <br>
            <span>Rating : ${resto.rating}</span>
            <h1>${resto.name}</h1>
            <p>${resto.description}</p>
            <button class="detail-button">Detail</button>
        </div>   
    </div>
    `
  document.getElementById('listRestaurant').innerHTML = html
})
