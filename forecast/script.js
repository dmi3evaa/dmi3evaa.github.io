var script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://code.jquery.com/jquery-3.3.1.min.js";
document.head.appendChild(script);
const CityId = {
    SPbId: "498817",
    LondonId: "2643743",
    ZagrebId: "3337532",
}
var myAPIKey = "93a5a6e4650fcb24135b3d5476ad86ff";
var weatherURI = "https://api.openweathermap.org/data/2.5/weather?id=";
var weatherURIKeyRequest = "&APPID=";
var weatherURITail = "&mode=html";
var loadCityForecast = function(element) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("forecast").innerHTML = this.responseText;
        };
    };
    switch (element.options[element.selectedIndex].value)
	{
		case "SPb":
			xmlHttp.open( "GET", weatherURI + CityId.SPbId + weatherURIKeyRequest + myAPIKey + weatherURITail, false );
		break;
	
		case "Lon":
			xmlHttp.open( "GET", weatherURI + CityId.LondonId + weatherURIKeyRequest + myAPIKey + weatherURITail, false );
		break;
	
		case "Zag":
			xmlHttp.open( "GET", weatherURI + CityId.ZagrebId + weatherURIKeyRequest + myAPIKey + weatherURITail, false );
		break;
	
		default:
		break;
	}
    xmlHttp.send(); 
};