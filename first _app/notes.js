
const fs = require("fs")
const chalk = require('chalk');

const addNotes = (req,body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.req === req)
    if (!duplicateNote) {
         notes.push({
        req:req,
        body:body
    })
    saveNotes(notes)
    }
    else{
        console.log("Found Duplicate Entries")

    }
}

const removeNotes = (req) => {
    const notes = loadNotes()
    const noteToKeep = notes.filter((note) => note.req !== req)
    if (notes.length === noteToKeep.length){
        console.log(chalk.red("No Note Found"))
    }
    else{
        saveNotes(noteToKeep)
        console.log(chalk.green("Note Removed Successfully"))
    }
   }

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFile("notes.json", dataJSON,(err, result) =>{
        if(err) console.log('error', err);
    })
}
 
const loadNotes = () => {
    try{
        const readBuffer = fs.readFileSync("notes.json")
        const dataJSON = readBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (e){
        return[]
    }

}

const listNotes = () => {
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(note.req)
    })
}

const readNote = (req) => {
    const notes = loadNotes()
    debugger
    const reading = notes.find((note) => note.req === req)
    if(reading === undefined){
        console.log("No notes found")
    }
    else{
        console.log("Notes Found")
    }
    }

module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote  
}



