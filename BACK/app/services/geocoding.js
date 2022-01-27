require('dotenv').config();
const axios=require('axios');

const api_key=process.env.GEOCODING_API_KEY

module.exports = async (request, response, next) => {

    try {
        const { street_number, street_name, zip_code, city, country  } = request.body
        const adress = `${street_number} ${street_name}, ${zip_code} ${city}, ${country}`
        console.log(`L'adresse à géocoder : `, adress)

        const result = await axios.get(`https://open.mapquestapi.com/geocoding/v1/address?key=${api_key}&location=${adress.split(' ').join('+')}`)

        console.log('result du geocodage latitude: ', result.data.results[0].locations[0].latLng.lat)
        console.log('result du geocodage longitude: ', result.data.results[0].locations[0].latLng.lng)

        request.body.latitude = result.data.results[0].locations[0].latLng.lat;
        request.body.longitude = result.data.results[0].locations[0].latLng.lng;

        next();

    } catch (error) {
        response.status(401).json(error.message);
    }
}

