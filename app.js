const chalk = require("chalk").default;
const yargs = require("yargs");

const notes = require("./notes.js");

yargs.version("1.0.1");

yargs.command({
    command: "add",
    describe: "Add a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string",
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string",
        },
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
    },
});

yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        describe: "Note title",
    },
    handler: function () {
        console.log("Removing note");
    },
});

yargs.command({
    command: "list",
    describe: "List all notes",
    builder: {
        describe: "Note title",
    },
    handler: function () {
        console.log("Listing all notes");
    },
});

yargs.command({
    command: "read",
    describe: "Read a note",
    handler: function () {
        console.log("Reading note");
    },
});

yargs.parse();
