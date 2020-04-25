const argv = require('./configYargs').argv;
const serviceLocation = require('./services/serviceLocation');
const serviceWeather = require('./services/serviceWeather');


const getWeather = async(address) => {
    try {
        if (address) {
            let coordinates = await serviceLocation.getPlaceLatLon(argv.address).then(resp => resp);
            return await serviceWeather.findWeather(coordinates.lat, coordinates.lon).then(resp => resp);
        } else {
            console.erro('Error');
        }
    } catch (e) {
        return 'It can not find the weather of the location';
    }
}



getWeather(argv.address).then(console.log).catch(console.log);