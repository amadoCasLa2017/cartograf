var geojsonMarkerOptions = {
	radius: 8,
	fillColor: "#ff7800",
	color: "#000",
	weight: 1,
	opacity: 1,
	fillOpacity: 0.8
};

   var marker;
   var grafitis;


$.getJSON("https://raw.githubusercontent.com/moropisa/cartograf/master/data/data.geojson",function(data){
	grafitis = L.geoJson(data, {pointToLayer: function(feature, latlng){
		//marker = L.marker(latlng);
		marker = L.circleMarker(latlng, geojsonMarkerOptions);
		marker.bindPopup(feature.properties.popUpContent);
		return marker
	}
}).addTo(map)})