var fs = require("fs")
const data = {
    name:"pavan kumar",
    age: "23",
    location: "chennai"
}

const dataBuffer = JSON.stringify(data)
// const datawrite = fs.writeFileSync("1-json.json", dataBuffer)
// const readdata = fs.readFileSync("1-json.json").toString()
// const finaldata = JSON.parse(readdata)
const x = JSON.parse(dataBuffer)
console.log(x.name)
// finaldata.name = "pavan1"
// finaldata.age = "34"
// const finaldataJSON = JSON.stringify(finaldata)
// const writeUpadte = fs.writeFileSync("1-json.json", finaldataJSON)
