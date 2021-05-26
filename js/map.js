// ---------------------------------------------------------------------------------------------------------------------------->
// MAP ELEMENT  ||-----------
// ---------------------------------------------------------------------------------------------------------------------------->


// When the window has finished loading create our google map below

L.DomEvent.on(window, 'load', init);
var greenIcon = L.icon({
    iconUrl: 'img/icon.png',
    iconSize:  [20, 35],

})


function init() {
    // Basic options for a simple Google Map
    let map = L.map('map').setView([41.3851, 2.1734], 12);
  

    L.tileLayer(' https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd'
    }).addTo(map);

 
 

    L.marker([41.3851, 2.1734], {icon: greenIcon}).addTo(map).bindPopup("<h5 id='pop-up'>I am here</h5>").openPopup();

    window.setTimeout(function () {
        map.invalidateSize();
    }, 1000);

    map.scrollWheelZoom.disable();
    map.touchZoom.disable();
    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();
    map.boxZoom.disable();
    map.zoomControl.disable();
    
};
