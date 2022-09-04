function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: -34.91623904954773, lng: -57.91200527141091};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Berisso, BS.AS.' // Title Location
    });
}

