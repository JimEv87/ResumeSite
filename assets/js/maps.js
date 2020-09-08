function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: {
      lat: 52.821868,
      lng: -2.925709,
    },
  });

  var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var locations = [
    { lat: 52.857769, lng: -3.051070 },
    { lat: 52.683519, lng: -2.434084 },
    { lat: 53.050680, lng: -3.011651 },
  ];

  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
