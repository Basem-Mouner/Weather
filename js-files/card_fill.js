//_____________function display other cards______________________________________________
'use strict'
let wind_dir = '';
//sellect ellements
const card1_title = document.querySelector('.card_title_1');
const card2_title = document.querySelector('.card_title_2');
const card3_title = document.querySelector('.card_title_3');
const card_information_1 = document.querySelector('.card_information_1');
const card_information_2 = document.querySelector('.card_information_2');
const card_information_3 = document.querySelector('.card_information_3');
import * as DATA from './getDatedetails.js'

export default function fillCards(currentLocation, currentDayObject, targetWeather) {
    if (currentDayObject.wind_dir == 'N') {
        wind_dir = 'North'
    } else if (currentDayObject.wind_dir == 'E') {
        wind_dir = 'East'
    } else if (currentDayObject.wind_dir == 'W') {
        wind_dir = 'West'
    } else if (currentDayObject.wind_dir == 'S') {
        wind_dir = 'South'
    } else { wind_dir = currentDayObject.wind_dir }

    let maxTempDay2 = targetWeather[1].day.maxtemp_c;
    let minTempDay2 = targetWeather[1].day.mintemp_c;
    let maxTempDay3 = targetWeather[2].day.maxtemp_c;
    let minTempDay3 = targetWeather[2].day.mintemp_c;
    let imgWeatherStatus_2 = targetWeather[1].day.condition.icon;
    let imgWeatherStatus_3 = targetWeather[2].day.condition.icon;
    let WeatherStatus_2 = targetWeather[1].day.condition.text;
    let WeatherStatus_3 = targetWeather[2].day.condition.text;
    let totalPrecip1 = targetWeather[1].day.totalprecip_in;
    let totalPrecip2 = targetWeather[2].day.totalprecip_in;
    let maxwind1 = targetWeather[1].day.maxwind_kph;
    let maxwind2 = targetWeather[1].day.maxwind_kph;

    // fill other day
    //______________________title cards_1&2&3____________________________
    card1_title.children[0].innerHTML = `${DATA.nameDay(targetWeather[0].date)}`;
    card1_title.children[1].innerHTML = `${DATA.numDate(targetWeather[0].date)} ${DATA.nameMounth(targetWeather[0].date)}`;
    card2_title.children[0].innerHTML = `${DATA.nameDay(targetWeather[1].date)}`;
    card2_title.children[1].innerHTML = `${DATA.numDate(targetWeather[1].date)} ${DATA.nameMounth(targetWeather[1].date)}`;
    card3_title.children[0].innerHTML = `${DATA.nameDay(targetWeather[2].date)}`;
    card3_title.children[1].innerHTML = `${DATA.numDate(targetWeather[2].date)} ${DATA.nameMounth(targetWeather[2].date)}`;
    //__________________________card1 info_________________________
    card_information_1.children[0].innerHTML = `${currentLocation.name}`;
    card_information_1.children[1].innerHTML = `${currentDayObject.temp_c}&degC`;
    card_information_1.children[2].setAttribute('src', `https:${currentDayObject.condition.icon}`);
    card_information_1.children[3].innerHTML = `${currentDayObject.condition.text}`;
    card_information_1.children[4].children[1].innerHTML = `${currentDayObject.precip_in}%`;
    card_information_1.children[5].children[1].innerHTML = `${currentDayObject.wind_kph}km/h`;
    card_information_1.children[6].children[1].innerHTML = `${wind_dir}`;
    //___________________________________________________
    //________________________card2 info___________________________
    card_information_2.children[0].innerHTML = `${maxTempDay2}&degC`;
    card_information_2.children[1].innerHTML = `${minTempDay2}&degC`;
    card_information_2.children[2].setAttribute('src', `https:${imgWeatherStatus_2}`);
    card_information_2.children[3].innerHTML = `${WeatherStatus_2}`;
    card_information_2.children[4].children[1].innerHTML = `${totalPrecip1}%`;
    card_information_2.children[5].children[1].innerHTML = `${maxwind1}km/h`;
    card_information_2.children[6].children[1].innerHTML = `${wind_dir}`;
    //________________________card3 info___________________________

    card_information_3.children[0].innerHTML = `${maxTempDay3}&degC`;
    card_information_3.children[1].innerHTML = `${minTempDay3}&degC`;
    card_information_3.children[2].setAttribute('src', `https:${imgWeatherStatus_3}`);
    card_information_3.children[3].innerHTML = `${WeatherStatus_3}`;
    card_information_3.children[4].children[1].innerHTML = `${totalPrecip2}%`;
    card_information_3.children[5].children[1].innerHTML = `${maxwind2}km/h`;
    card_information_3.children[6].children[1].innerHTML = `${wind_dir}`;

}
//_______________________________________________________________________________________