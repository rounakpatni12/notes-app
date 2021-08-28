const chalk = require("chalk");
const fs = require("fs");

function removeNotes(title) {
  let notes = loadNotes();
  let duplicatenotes = notes.filter(function (note) {
    return note.title !== title;
  });
  
  if (notes.length === duplicatenotes.length) {
    console.log(chalk.red("title not available"));
  } else {
    console.log(chalk.green("title removed successfully"));
    saveNotes(duplicatenotes);
  }
}

function addNotes(title, body) {
  let notes = loadNotes();
  // let duplicatenotes = notes.filter(function (note) {
  //   return note.title === title;
  // });
  let duplicatenote = notes.find((note) => note.title === title);
   
  if (!duplicatenote) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.green("notes successfully added"));
  } else {
    console.log(chalk.red("notes title already exist"));
  }
}

function listNotes() {
  let lists = loadNotes();
  console.log(chalk.inverse("your notes are: "));

  lists.forEach((list) => {
    console.log("==> " + list.title);
  });
}
const readNote = (title) => {
  let notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red("note not found"));
  }
};
function saveNotes(notes) {
  let dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
}
function loadNotes() {
  try {
    let dataBuffer = fs.readFileSync("notes.json");
    let dataJson = dataBuffer.toString();
    let data = JSON.parse(dataJson);
    return data;
  } catch (error) {
    return [];
  }
}
module.exports = {
  
  addNotes: addNotes,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNote: readNote,
};
