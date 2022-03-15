    // Create XMLHttpRequest object.
    var XHR = new XMLHttpRequest();

    // Initiate request.
    XHR.onreadystatechange = reportStatus;
    XHR.open("GET", "../DATA.json", true);  // get json file.
    XHR.send();

    function reportStatus() {
        if (XHR.readyState == 4) {		// Check if request is complete.
         
            const listElementRestaurant = document.getElementById("listRestaurant");
            
            var data = JSON.parse(XHR.responseText);
            var listRestaurant = data.restaurants;
            var listRestaurantHTML = "";
            for (var i = 0; i < listRestaurant.length; i++) {
                listRestaurantHTML += "<li>" + listRestaurant[i].pictureId + "</li>";
            }
            listElementRestaurant.innerHTML = listRestaurantHTML;
    
        }
    }