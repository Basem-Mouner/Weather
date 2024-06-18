// search autocomplete
'use strict'
export default async function searchWeather(region) {
    try {
        let response = await fetch(`http://api.weatherapi.com/v1/search.json?key=b5d36db7c319496ab2b183513241106&q=${region}`)
        let finalData = await response.json();
        return finalData[0].name;
    } catch (error) {
        console.log(error);
    } finally {
        console.log('welldone search');
    }
}
///_________________________________________________________________________