const { program } = require("commander");

program.command("list").description("List all the TODO tasks").action(list);

const conf = new (require("conf"))();

function list() {}

const todoList = conf.get("todo-list");
const list = require("./commands/list");
program.parse();
