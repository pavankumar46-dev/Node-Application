const chalk = require('chalk');
const geo = require("./utils/geocode")
const forecast = require("./utils/forecast")

const address = process.argv.slice(2);
if(address.length === 0){
    console.log(chalk.red("Please provide valid address"))
}
else{
    geo(address,(longitude,latitude)=> {
        forecast(longitude,latitude)
    });
}






