const request = require('request');

const forecast = (longitude, latitude) => {
geourl = "http://api.weatherstack.com/current?access_key=489b400e52ec63626028a41098aa75fb&query="+longitude+","+latitude+""
my_location_weather = request.get({url:geourl ,json:true}, (error,response,body)=>{
if(error){
    console.log("Unable to connect to Internet services")
}
else if(response.body.error){
    console.log("Please specify a valid location identifier using the query parameter.")

}
else{
        console.log("Current temparature in ur area is "+response.body.current.temperature+" And the possibility of rain is "+response.body.current.precip)
}
})
}

module.exports = forecast