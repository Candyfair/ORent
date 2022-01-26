require('dotenv').config();
const fetch = require("node-fetch");

const api_key=process.env.GEOCODING_API_KEY

module.exports = async (request, response, next) => {

    try {
        const { street_number, street_name, zip_code, city, country  } = request.body
        const adress = `${street_number} ${street_name},  ${zip_code}, ${city}, ${country}`
        console.log(`L'adresse à géocoder : `, adress)

        const result = await fetch(`https://open.mapquestapi.com/geocoding/v1/address?key=${api_key}&location=${adress.split(' ').join('+')}`)

        console.log('result du geocodage : ', result)

        // request.latitude = payload.userId;

        next();

    } catch (error) {
        response.status(401).json(error.message);
    }
}