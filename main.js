function onGoogleMapResponse(){
	map = new google.maps.Map(document.getElementById('googleMapContainer'), {
		zoom: 16
	});

	var location = "NYU Stern School of Business";
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode( { 'address' : location}, function(results, status){
		if(status == google.maps.GeocoderStatus.OK){
			map.setCenter(results[0].geometry.location);
		};
		map.data.loadGeoJson('https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson')
		map.data.setStyle(function(feature){
		    
		})
	});
}
