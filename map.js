//Load map
mapboxgl.accessToken = 'pk.eyJ1IjoiamFza2E3MjQiLCJhIjoiY2l6Z3JucDF2MDAxZTMzdGY5ZDY1dTdpcSJ9.ke-er3jChidKw_FqDcFK7Q';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/jaska724/cizxw3qje008l2ro4hjz42as6', //stylesheet location
    center: [0, 50], // starting position
    zoom: 1 // starting zoom
});