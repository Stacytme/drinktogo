//-----burger Button-----

let navigation = document.querySelector('.site-list');
let navToggle = document.querySelector('.header__toggle');


navigation.classList.remove('site-list--nojs');
navToggle.classList.remove('header__toggle--nojs');

const burgerButton = () => {
  navigation.classList.toggle('site-list--closed');
  navToggle.classList.toggle('header__toggle--closed');
  navToggle.classList.toggle('header__toggle--open');
}

navToggle.addEventListener('click', burgerButton);



//----slider Swiper----

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



//-------map Leaflet------

const LTILELAYER_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const ATTRIBUTION = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const ZOOM = 20;
const OUR_ADDRESS = {
  lat: 59.968423,
  lng: 30.317685,
};

const map = L.map('map', { scrollWheelZoom: false });
const mapImage = document.querySelector('.map__image');
const mainPinIcon = L.icon({
  iconUrl: './img/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const mainMarker = L.marker(
  OUR_ADDRESS,
  {
    draggable: false,
    icon: mainPinIcon,
  },
);

const executeMap = () => {
  map.setView(OUR_ADDRESS, ZOOM);
  mainMarker.addTo(map);
  L.tileLayer(LTILELAYER_URL, {
    attribution: ATTRIBUTION
  }).addTo(map);
  mapImage.classList.add('map__image--js');
};

executeMap();
