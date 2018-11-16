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

    if (tarea) {
      console.log(`Task Created Correctly`.green);
      console.log('Description: '.green + argv.description);
    } else {
      console.log(`Existent Task With This Name`.red);
    }
    break;

  case 'list':

    let tasklist = control_task.getListado(argv.task_types);

    if (tasklist.length == 0) {
      console.log('Nothin to do :)')

    } else {
      for (let task of tasklist) {
        console.log('========= Pending Task ========='.green);
        console.log(`Task: ${task.description}`);
        if (task.completed === true) {
          console.log(`State: Completed`);
        } else {
          console.log(`State: Pending`)
        }
        console.log('================================'.green);
      }
    }
    break;

  case 'update':

    let update_task = control_task.updateTask(argv.description, argv.complete);

    console.log(update_task);

    break;

  case 'delete':

    let deletetask = control_task.deleteTask(argv.description);
    console.log(deletetask);
    break;

  default:
    console.log('command not validate, --help for options');
}
