/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-15 11:19:43
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-15 15:25:33
 */

const ONE_SECOND = 1000;
const ONE_MINUTE = 60 * ONE_SECOND;
const ONE_HOUR = 60 * ONE_MINUTE;
const ONE_DAY = 24 * ONE_HOUR;
const ONE_WEEK = 7 * ONE_DAY;


function now() {
        return new Date();
}

function nextYear() {
        let date = now();
        date.setFullYear(date.getFullYear() + 1);
        return date;
}

function lastYear() {
        let date = now();
        date.setFullYear(date.getFullYear() - 1);
        return date;
}

function yesterday() {
        let date = now();
        date.setDate(date.getDate() - 1);
        return date;
}

function tomorrow() {
        let date = now();
        date.setDate(date.getDate() + 1);
        return date;
}

function lastMonth() {
        let date = now();
        date.setMonth(date.getMonth() - 1);
        return date;
}

function nextMonth() {
        let date = now();
        date.setMonth(date.getMonth() + 1);
        return date;
}

function lastWeek() {
        return new Date(now().getTime() + ONE_WEEK);
}

function nextWeek() {
        return new Date(now().getTime() - ONE_WEEK);
}



/**
 * 
 * @param {Date} date 
 */
function toyyyy_MM_dd_hh_mm_ss(date) {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

function toyyyy_MM_dd(date) {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

function tohhmmss() {
        return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

function toyyyyMMddhhmmss(date) {
        return `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;
}

<<<<<<< HEAD
function timestamp() {
        return parseInt(new Date().getTime() / 1000)
}

function timestampMs() {
        return Date().getTime();
=======
function parseDate(str){
        try{
              return Date.parse(str);
        }catch{
                return null;
        }
>>>>>>> c25257861b0c992fa27bfd1b99d636b434d5c5be
}


exports.DATE = {
        now,
        yesterday,
        tomorrow,
        lastMonth,
        nextMonth,
        lastYear,
        nextYear,
        lastWeek,
        nextWeek,
        ONE_DAY,
        ONE_HOUR,
        ONE_MINUTE,
        ONE_SECOND,
        ONE_WEEK,
        toyyyy_MM_dd,
        toyyyy_MM_dd_hh_mm_ss,
        tohhmmss,
        toyyyyMMddhhmmss,
<<<<<<< HEAD
        timestamp,
        timestampMs
=======
        parseDate
>>>>>>> c25257861b0c992fa27bfd1b99d636b434d5c5be
}