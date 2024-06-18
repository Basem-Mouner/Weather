// //_____________________________DATE FUNCTIONS_____________________________________________
'use strict'
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const mounths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function nameDay(target_date) {
    let date = new Date(target_date);
    return days[date.getDay()];
}

export function nameMounth(target_date) {
    let date = new Date(target_date);
    return mounths[date.getMonth()];
}

export function numDate(target_date) {
    let date = new Date(target_date);
    return date.getDate();
}
// //__________________________________________________________