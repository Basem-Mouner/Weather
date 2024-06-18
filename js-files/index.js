//=================================================================================================
//======================Weather SYSTEM=============================================================
//=================================================================================================
//=================================================================================================
//====================Assignment[5]================================================================

'use strict'
import displayMoreDayWeather, {} from './weatherData.js'
import searchWeather, {} from './search.js'

let currentNavigator_LocationData;
let required_City = '';
const searchCity = document.getElementById('FINDLOCATION');
const find_button = document.getElementById('FINDCITYBUTTON');
//_________________________________________________________________________
//self invoke func to detect current location .... NAvigation.....
(function() {
    navigator.geolocation.getCurrentPosition(async function(position) {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            console.log('current lat : ' + latitude + '  current long : ' + longitude);
            try {
                let response1 = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
                currentNavigator_LocationData = await response1.json();
                displayMoreDayWeather(currentNavigator_LocationData.city);
            } catch (error) { console.log(error); }
        },
        error => { console.log(error); })
})();
//__________________________EVENT SEARCH....________________________________________________
searchCity.addEventListener('keyup', async function(e_handler) {
    required_City = searchCity.value;
    // console.log(required_City);
    let result_autmatic_search = await searchWeather(required_City);
    console.log(result_autmatic_search);
    if (required_City == "") {
        displayMoreDayWeather(currentNavigator_LocationData.city);
    } else {
        displayMoreDayWeather(result_autmatic_search);
    }
});
find_button.addEventListener('click', async function(e_handler) {
    required_City = searchCity.value;

    let result_autmatic_search = await searchWeather(required_City);
    console.log(result_autmatic_search);
    if (required_City == "") {
        displayMoreDayWeather(currentNavigator_LocationData.city);
    } else {
        displayMoreDayWeather(result_autmatic_search);
    }
});
//__________________________________________________________________________
//______________________auto refresh after 5 minute ____________________________________________
setInterval(function() { displayMoreDayWeather(currentNavigator_LocationData.city); }, 300000);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++