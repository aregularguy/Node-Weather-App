const request = require('request')

const forecast=(latitude,longitude,callback)=>{
    const url='https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+encodeURIComponent(latitude)+','+ encodeURIComponent(longitude)+'?key=VF5WM23U5VFWWAW7YFHYPFYM2'

    request({url, json:true},(err,{body})=>{
        if(err)
        callback('Unable to connect forecast',undefined)
        else if(body.err)
        callback('Unable to find location',undefined)
        else{
            callback(undefined,body.days[0].description + ' is the Current Weather '+ body.days[0].temp + ' is the current weather')
        }
    })
}
// const forecast = (latitude, longitude, callback)=>{
//     const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+encodeURIComponent(latitude)+','+ encodeURIComponent(longitude)+'?key=VF5WM23U5VFWWAW7YFHYPFYM2'

//     request({url: url, json:true}, (err, res)=>{
//         if (err){
//             callback('hey', undefined);
//         }
//         else if (res.body.err){
//             callback('hey 2', undefined);
//         }
//         else{
//             callback(undefined, res);
//         }
//     })
// }


module.exports = forecast





















