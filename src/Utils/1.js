// const request = require('request')

// const forecast = (latitude, longitude, callback)=>{
//     const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}?unitGroup=us&key=VF5WM23U5VFWWAW7YFHYPFYM2`

//     request({url: url, json: true}, (err, res)=>{
//         if (err){
//             callback('Unable to connect to weather service', undefined)
//         }
//         else if (!res.body.days){
//             callback('unable to find location. Try other search', undefined)
//         }
//         else{
//             callback(undefined, `${res.body.days[0].description} It is currently ${res.body.currentConditions.temp} degrees out. There is `)
//         }
//     })
// }

// module.exports = forecast


const request = require('request')

const forecast = (latitude, longitude, cb) => {
    const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+encodeURIComponent(latitude)+','+ encodeURIComponent(longitude)+'?key=VF5WM23U5VFWWAW7YFHYPFYM2'

    request({ url, json: true }, (error, response) => {
        if (error) {
            cb('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            cb('Unable to find location', undefined)
        } else {
            cb(undefined, response)
        }
    })
}

module.exports = forecast