const fs = require("fs");

const getNotes = () => {
    return "Your notes...";
};

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNotes = notes.filter(note => note.title === title);

    if(duplicateNotes.length === 0) {
        notes.push({
            title,
            body,
        });
    
        saveNotes(notes);
    }
    else {
        console.log("Duplicate");
    }
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
}

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
};
