(function(){
//////////////////////////////////////////////////////////////////////////////
var timeOffset = 0;
var userCoordinate = {
    latitude: 40,
    longitude: 0,
};
const astrosvg = astrolabesvg();

var tympanTextTimeMode = 0; // 0-UTC 1-LOCALE 2-SIDEREAL(LOCAL)
function switchTympanTextTimeMode(){
    tympanTextTimeMode += 1;
    if(tympanTextTimeMode >= 3) tympanTextTimeMode=0;
}

function getJulianDate(date){
    return (date.getTime() / 86400000) + 2440587.5;
}

async function getLocation(){
    return new Promise(function(resolve, reject){
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

function updateDisplay(params){ 
    //solarEclipticLng, siderealTime){
    $(".sun-arrow-1").attr(
        "transform",
        "rotate(" + astrosvg.getSunArrow1Angle(params.solarEclipticLng) + ")"
    );
    $(".sun-arrow-2").attr(
        "transform",
        "rotate(" + astrosvg.getSunArrow2Angle(params.solarEclipticLng) + ")"
    );
    $("#rete").find("svg").attr(
        "transform",
        "rotate(" + astrosvg.getReteAngle(
            params.solarEclipticLng,
            params.siderealTime
        ) + ")"
    );

    $(".tympan-text1").text(params.text1);
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
    $(".tympan-text1").click(switchTympanTextTimeMode);


    function tick(){
        const now = new Date(new Date().getTime() + timeOffset);
        var siderealTime = 0;
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

        var tympanText1 = "";
        switch(tympanTextTimeMode){
            case 0:
                tympanText1 =
                    now.getUTCFullYear() + "-" + (now.getUTCMonth()+1) + 
                    "-" + now.getUTCDate() + " UTC " +
                    now.getUTCHours() + ":" + now.getUTCMinutes() + ":" +
                    now.getUTCSeconds()
                ;
                break;
            case 1:
                tympanText1 =
                    now.getFullYear() + "-" + (now.getMonth()+1) + 
                    "-" + now.getDate() + " LOCAL " +
                    now.getHours() + ":" + now.getMinutes() + ":" +
                    now.getSeconds()
                ;
                break;
            case 2:
                tympanText1 = "SIDEREAL TIME ON CLOCK";
                break;
        }
        
        // finally
        updateDisplay({
            solarEclipticLng: solarEclipticLng,
            siderealTime: siderealTime,
            text1: tympanText1,
        });
    }

    setInterval(tick, 1000);
    tick();

});


var _foundTimeoffsets = [];
function adjustTimeoffset(){
    const localSendTime = new Date();
    $.ajax({
        url: "/?__=" + Math.random(), // void the caching mechanism
        type: 'HEAD',
    })
    .done(function(data, textStatus, xhr){
        const localRecvTime = new Date();
        const datestr = xhr.getResponseHeader("Date");
        if(!datestr) return;
        const serverDate = new Date(datestr);
        const offset = (
            serverDate.getTime() - 
            (localSendTime.getTime() + localRecvTime.getTime()) / 2 
        );
        _foundTimeoffsets.push(offset);
        if(_foundTimeoffsets.length > 5){
            _foundTimeoffsets = _foundTimeoffsets.slice(-5);
            var sum = 0;
            _foundTimeoffsets.forEach(function(e){ sum += e });
            timeOffset = sum / 5; 
        }
    })
    .always(function(){
        var afterTime = 5000; // minimum
        afterTime = afterTime + 2000 * _foundTimeoffsets.length;
        setTimeout(adjustTimeoffset, afterTime);
    });
}
//setInterval(adjustTimeoffset, 10000);
adjustTimeoffset();

//////////////////////////////////////////////////////////////////////////////
})();
