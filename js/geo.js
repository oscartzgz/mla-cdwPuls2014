var geo = navigator.geolocation;
var opciones={}

function geo_error () {
	console.log("Hmmm... no puedo saber donde estas");
}

function geo_exito (posicion) {
	var lat = posicion.coords.latitude;
	var lon = posicion.coords.longitude;
	var mapa = new Image();
	mapa.src = "http://maps.googleapis.com/maps/api/staticmap?zoom=13&size=200x200&sensor=false&center="+lat+","+lon;
	console.log(mapa.source);
	$('#geo').append(mapa);

	obtenerGeoInformacion(lat, lon);
}

geo.getCurrentPosition(geo_exito, geo_error, opciones);