
const description = {
  demand: true,
  alias: 'd',
  desc: 'Description for task'
}

const complete = {
  default: true,
  alias: 'c',
  desc: 'completed task'
}

// Options
const argv = require('yargs')
  .command('create', 'Create new task', {
    description
  })
  .command('update', 'Update status of task', {
    description,
    complete
  })
  .command('list', 'Task List', {

  })
  .command('delete', 'Delete task', {
    description
  })
  .help().argv;


module.exports = {
  argv
}
