(function(){
//////////////////////////////////////////////////////////////////////////////
var userCoordinate = {
    latitude: 40,
    longitude: 0,
};
const astrosvg = astrolabesvg();

function getJulianDate(date){
    return (date.getTime() / 86400000) + 2440587.5;
}

async function getLocation(){
    return new Promise(function(resolve, reject){
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

function updateDisplay(solarEclipticLng, siderealTime){
    $(".sun-arrow-1").attr(
        "transform",
        "rotate(" + astrosvg.getSunArrow1Angle(solarEclipticLng) + ")"
    );
    $(".sun-arrow-2").attr(
        "transform",
        "rotate(" + astrosvg.getSunArrow2Angle(solarEclipticLng) + ")"
    );
    $("#rete").find("svg").attr(
        "transform",
        "rotate(" + astrosvg.getReteAngle(solarEclipticLng, siderealTime) + ")"
    );
}


$(async function(){

    try{
        var position = await getLocation();
        userCoordinate.latitude = position.coords.latitude;
        userCoordinate.longitude = position.coords.longitude;
    } catch(e){
        console.warn("Cannot get user location.");
    }


    $(astrosvg.Tympan(userCoordinate.latitude / 180 * astrosvg.pi))
        .attr("transform", "rotate(-90)")
        .appendTo("div#tympan");
    $(astrosvg.Rete())
        .appendTo("div#rete");


    function tick(){
        var siderealTime = 0;
        var now = new Date();
        var JD = getJulianDate(now);
        siderealTime = (now.getUTCHours() + now.getUTCMinutes() / 60)  + userCoordinate.longitude / 15;

        // calculate solar ecliptic longtitude
        function range360(i){
            while(i < 0) i += 360;
            while(i > 360) i -= 360;
            return i;
        }
        function toRad(i){ return i / 180.0 * Math.PI };
        var n = JD - 2451545.0;
        var L = range360(280.460 + 0.9856474 * n);
        var g = range360(357.528 + 0.9856003 * n);
        var solarEclipticLng =
            L + 1.915 * Math.sin(toRad(g)) + 0.020 * Math.sin(toRad(2*g));
        
        // finally
        updateDisplay(solarEclipticLng, siderealTime);
    }

    setInterval(tick, 60000);
    tick();

});

//////////////////////////////////////////////////////////////////////////////
})();
