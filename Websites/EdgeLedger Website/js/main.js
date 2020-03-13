// Google Map
var map;
function initMap() {
  const loc = {lat: 32.085300, lng: 34.781769}
  map = new google.maps.Map(document.querySelector('.map'), {
    center: loc,
    zoom: 10
  });
  const marker = new google.maps.Marker({ position:loc, map: map });
}

// Sticky menu background 
window.addEventListener('scroll', ()=> {
  if (window.scrollY > 100) {
    document.getElementById('navbar').style.opacity = 0.9;
  } else {
    document.getElementById('navbar').style.opacity = 1;
  }
});

// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
      scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});