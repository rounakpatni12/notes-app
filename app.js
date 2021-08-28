const yargs = require("yargs");
const utils_notes=require('./utils.js')
const chalk=require('chalk')
// import yargs from 'yargs';

// const arg = process.argv[2];
// console.log(process.argv);

yargs.command({
  command: "remove",
  describe: "remove a note",
  builder:{
    title:{
      describe:'remove notes',
      demandOption:true,
      type:'string'
    }
  },
  handler: function (argv) {
    // console.log("remove is running");
    utils_notes.removeNotes(argv.title)
  },
});

yargs.command({
  command: "add",
  describe: "adding a note",
  builder: {
    title: {
      describe: "notes title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "your body of content",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    // console.log(`Title is:${argv.title}\nBody is:${argv.body}`);
    utils_notes.addNotes(argv.title,argv.body)
  },
});

yargs.command({
  command: "list",
  describe: "lists all notes",  
  handler: function (argv) {
    // console.log("list  is running", argv);
    utils_notes.listNotes() 
  },
});

yargs.command({
  command: "read",
  describe: "reading a note",
  builder: {
    title: {
      describe: "Read a title from here",
      demandOption: true,
      type: "string",
    }
  },
  handler: function (argv) {
    // console.log("read  is running");
    utils_notes.readNote(argv.title)
  },
});
// console.log(yargs.argv);
yargs.parse();
