const request = require('request')

const geocode = (address, callback) => {
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+address+"&appid=d04c75274f851d69c894586ae6474fa2"

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode