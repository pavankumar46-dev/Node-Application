// const event = {
//     name: "My Party",
//     newFunction: function(){
//         console.log("this is "+ this.name)
//     }
// }
// event.newFunction()

const event = {
    name: "My Party",
    guestList: ["Pavan", "Vamsi", "Shamili"],
    newFunction: function() {console.log("this is "+ this.name)}
}
event.newFunction()