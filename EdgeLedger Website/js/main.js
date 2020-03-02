var map;
function initMap() {
  const loc = {lat: 32.085300, lng: 34.781769}
  map = new google.maps.Map(document.querySelector('.map'), {
    center: loc,
    zoom: 10
  });
  const marker = new google.maps.Marker({ position:loc, map: map });
}