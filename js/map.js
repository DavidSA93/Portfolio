// ---------------------------------------------------------------------------------------------------------------------------->
// MAP ELEMENT  ||-----------
// ---------------------------------------------------------------------------------------------------------------------------->


// When the window has finished loading create our google map below

L.DomEvent.on(window, 'load', init);
var greenIcon = L.icon({
    iconUrl: 'img/icon.png',
    iconSize:  [30, 45],

})


function init() {
    // Basic options for a simple Google Map
    let map = L.map('map').setView([39.9914718, -0.06534319999999999], 15);
  

    L.tileLayer(' https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions">CartoDB</a>'
    }).addTo(map);

 
 

    L.marker([39.9914718, -0.06534319999999999], {icon: greenIcon}).addTo(map).bindPopup("<h5 id='pop-up'>I am here</h5>").openPopup();

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
