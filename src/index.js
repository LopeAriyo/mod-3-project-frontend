function findPlayerLocation (){

    if (!navigator.geolocation) {
        console.log("Geolocation is not supported by your browser");
        return;
    }

    // console.log("Locating..."); if we have time we will change this to a loading screen

    navigator.geolocation.getCurrentPosition((position) => {

        let playerCoordinates = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        };

        console.log("User's current latitude is " + playerCoordinates.latitude + ".");
        console.log("User's current longitude is " + playerCoordinates.longitude + ".");

        renderMap(playerCoordinates.latitude, playerCoordinates.longitude)

    })   
}

function renderMap (latitude, longitude){

    mapboxgl.accessToken = 'pk.eyJ1IjoibG9wZWFyaXlvIiwiYSI6ImNrNWpkamFrcTAyM2IzZXBja3dncmtld3AifQ.-T1q9Tw23a3tqqJ9CYFllg';
    
    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/dark-v10', //hosted style id
        center: [longitude, latitude], // starting position [longitude, latitude], needs to be generated and shown on map 
        zoom: 15 // starting zoom
    });
    console.log(document.querySelector("#map"))
}

findPlayerLocation() 
