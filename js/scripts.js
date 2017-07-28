var geojsonMarkerOptions = {
	radius: 8,
	fillColor: "#ff7800",
	color: "#000",
	weight: 1,
	opacity: 1,
	fillOpacity: 0.8
};

// funcion que se ejecuta cada vez que se lee uno de los grafitis.
// muestra el pop up
function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}


//LEO DATA TENGO DOS FORMAS AJAX O AJAX LEAFLET PLUGIN NO FUNCA NINGUNA POR AHORA

//https://stackoverflow.com/questions/20485723/add-external-geojson-to-leaflet-layer
//https://github.com/calvinmetcalf/leaflet-ajax
//var grafitis = new L.GeoJSON.AJAX("data.json");

var grafitis = new L.geoJson();
grafitis.addTo(map);

$.ajax({
dataType: "json",
url: "data/data.geojson",
success: function(data) {
    $(data.features).each(function(key, data) {
        grafitis.addData(data);
    });
}
}).error(function() {});






// leemos los datos de grafitis y ejecutamos onEachFeatire para
// que le agrege a cada uno un popup 
 L.geoJSON(grafitis, {
 	pointToLayer: function (feature, latlng) {
 		return L.circleMarker(latlng, geojsonMarkerOptions);
 	},
 	onEachFeature: onEachFeature
 }).addTo(map);
