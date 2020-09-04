// const add = (var1,var2,callback) =>{
//     setTimeout(()=>{
//         sum = var1+var2
//         console.log("Done with two seconds delay")
//         callback(sum)
//     },2000)
// }

// add (1,4,(sum) => {
//     console.log(sum)
// })

// var myArgs = process.argv.slice(2);
// console.log("myArgs:", myArgs);

const http = require('http')

const url = "http://api.weatherstack.com/current?access_key=489b400e52ec63626028a41098aa75fb&query=40,30"

const req = http.request(url,(response) => {
    console.log(response)
})

console.log(req)