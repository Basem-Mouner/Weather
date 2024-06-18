//________________________________________________________________________
//for morethan one day Display weather
'use strict'
let targetWeather = [];
let currentDayObject;
let currentLocation;
import fillCards, {} from './card_fill.js'

export default async function displayMoreDayWeather(region) {
    try {
        let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=b5d36db7c319496ab2b183513241106&q=${region}&days=3`, {
            cache: "no-cache",
        })
        let finalData = await response.json();

        currentLocation = finalData.location;
        currentDayObject = finalData.current;
        targetWeather = finalData.forecast.forecastday;
        //++++++++++++++++++++++++++++++++++++++++++
        console.log(finalData);
        console.log(currentLocation);
        console.log(currentDayObject);
        console.log(targetWeather);
        //___________________________________________________
        fillCards(currentLocation, currentDayObject, targetWeather);
        //___________________________________________________
    } catch (error) {
        console.log(error);
    } finally {
        console.log('welldone three days loaded');
    }
}