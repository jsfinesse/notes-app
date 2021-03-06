const { default: chalk } = require("chalk");
const fs = require("fs");

const getNotes = () => {
    return "Your notes...";
};

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title,
            body,
        });
        saveNotes(notes);
        console.log(chalk.bgGreen("New note added"));
    } else {
        console.log(chalk.bgRed("Duplicate"));
    }
};

const removeNote = (title) => {
    const notes = loadNotes();

    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notesToKeep.length === notes.length) {
        console.log(chalk.bgRed("No matching note found!"));
    } else {
        console.log(chalk.bgGreen("Note removed!"));
        saveNotes(notesToKeep);
    }
};

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse.blue("Printing notes..."));

    let i = 1;
    notes.forEach((note) => {
        console.log(`${i}.` + note.title);
        i++;
    });
};

const readNote = (title) => {
    const notes = loadNotes();
    const foundNote = notes.find((note) => note.title === title);

    if (!foundNote) {
        console.log(chalk.bgRed("Note not found!"));
    } else {
        console.log(chalk.bgBlue("Note Title: " + title));
        console.log(foundNote.body);
    }
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
};
