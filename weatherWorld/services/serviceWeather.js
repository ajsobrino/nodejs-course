const axios = require('axios');


const url = 'https://api.openweathermap.org/data/2.5/weather'



const findWeather = async function(lat, lon) {
    if (lat && lon) {
        const latURI = encodeURI(lat);
        const lonURI = encodeURI(lon);
        const request = axios.create({
            baseURL: url + '?lat=' + latURI + '&lon=' + lonURI + '&appid=2cd1cab6465e84b68d1965ea9c9277ca' + '&metric=metric',
        });
        const resp = await request.get();
        return {
            main: resp.data.main,
            cloud: resp.data.clouds,
            wind: resp.data.wind
        }
    } else {
        throw new Error('It is neccesary the lat and lon of the location');
    }

}

module.exports = {
    findWeather
}