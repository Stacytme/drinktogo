let navigation=document.querySelector(".site-list"),navToggle=document.querySelector(".header__toggle");navigation.classList.remove("site-list--nojs"),navToggle.classList.remove("header__toggle--nojs");const burgerButton=()=>{navigation.classList.toggle("site-list--closed"),navToggle.classList.toggle("header__toggle--closed"),navToggle.classList.toggle("header__toggle--open")};navToggle.addEventListener("click",burgerButton);const swiper=new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),LTILELAYER_URL="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",ATTRIBUTION='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',ZOOM=20,OUR_ADDRESS={lat:59.968423,lng:30.317685},map=L.map("map",{scrollWheelZoom:!1}),mapImage=document.querySelector(".map__image"),mainPinIcon=L.icon({iconUrl:"./img/map-pin.svg",iconSize:[38,50],iconAnchor:[19,50]}),mainMarker=L.marker(OUR_ADDRESS,{draggable:!1,icon:mainPinIcon}),executeMap=()=>{map.setView(OUR_ADDRESS,20),mainMarker.addTo(map),L.tileLayer(LTILELAYER_URL,{attribution:ATTRIBUTION}).addTo(map),mapImage.classList.add("map__image--js")};map.setView(OUR_ADDRESS,20),mainMarker.addTo(map),L.tileLayer(LTILELAYER_URL,{attribution:ATTRIBUTION}).addTo(map),mapImage.classList.add("map__image--js");