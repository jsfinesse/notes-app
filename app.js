const chalk = require("chalk").default;

const getNotes = require("./notes.js");

const msg = getNotes();

console.log(chalk.green("Success!"));
