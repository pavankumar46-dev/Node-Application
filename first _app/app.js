const notes = require("./notes.js")
const color = require("chalk")
const yargs = require("yargs")
const fs = require("fs")

yargs.version('1.1.0')

yargs.command({
    command: "add",
    describe: "this is add command",
    builder: {
        req:{
            describe:"this is request",
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:"this is body",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv)  {
      notes.addNotes(argv.req,argv.body)
    }
})

yargs.command({
    command: "remove",
    describe: "this is remove command",
    builder: {
        req:{
            describe:"this is request",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
      notes.removeNotes(argv.req)
    }
})

yargs.command({
    command:"read",
    describe: "this is reading",
    builder: {
        req:{
            describe:"this is request",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.req)
    }
})


yargs.command({
    command:"list", 
    describe: "List all the notes",
    handler(){
        notes.listNotes()
    }
})

yargs.parse()