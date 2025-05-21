const mymap = L.map('issMap').setView([0, 0], 3);
const attribution = '&copy <a href="https://www.openstreetmap.org/copyright"> OpenStreet </a> contributors';
const tileURL = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
const tiles = L.tileLayer(tileURL, {attribution} ).addTo(mymap)
var myIcon = L.icon({
    iconUrl: 'iss.png',
    iconSize: [18, 45],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
});

const marker = L.marker([0, 0], {icon: myIcon}).addTo(mymap)