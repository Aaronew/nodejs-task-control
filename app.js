

//Commands Yargs
const argv = require('./config/yargs').argv;

//Packages
const colors = require('colors');

//Backend Application
const control_task = require('./control-task/control-task');

let command = argv._[0];

switch (command) {

  case 'create':

    let tarea = control_task.createTask(argv.description);
    console.log("Description: ", argv.description)
  break;

  case 'list':

    let tasklist = control_task.getListado();

    for (let task of tasklist) {
      console.log('========== Pending Task =========='.green);
      console.log(`Task: ${task.description}`);
      if (task.completed === true) {
        console.log(`State: Completed`);
      }else{
        console.log(`State: Pending`)
      }
      console.log('==============================='.green);
    }
    break;

  case 'update':

    let update_task = control_task.updateTask(argv.description, argv.completed);
    console.log(update_task);
    break;

  case 'delete':

    let deletetask = control_task.deleteTask(argv.description);
    console.log(deletetask);
    break;

  default:
  console.log('command not validate, --help for options');
}
