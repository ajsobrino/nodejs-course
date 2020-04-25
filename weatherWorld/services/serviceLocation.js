const axios = require('axios');

const url = 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php';
const header = {
    'X-RapidAPI-Key': '3d1199ecedmshae75c6617f9060bp19d5c2jsn1a2b54072a86'
}

const getPlaceLatLon = async(address) => {
    if (address) {
        const encodedUrl = encodeURI(address);
        const request = axios.create({
            baseURL: url + '?location=' + encodedUrl,
            headers: header
        });
        const resp = await request.get();
        if (resp.data.Results.length === 0) {
            throw new Error('There is not result for that location')
        }
        let data = resp.data.Results[0];
        return {
            name: data.name,
            lat: data.lat,
            lon: data.lon
        }
    } else {
        console.error('There is not address');
    }
}

module.exports = {
    getPlaceLatLon
}