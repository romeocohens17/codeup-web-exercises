"use strict";

const URL = "https://api.openweathermap.org/data/2.5/onecall"

$.get(URL, {
    APPID: OPEN_WEATHER_KEY,
    lat: 40.7485452,
    lon: -73.9879522,
    units: "imperial"
}).done(function(results) {console.log(results);})