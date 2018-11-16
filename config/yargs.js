
const description = {
  demand: true,
  alias: 'd',
  desc: 'Description for task'
}

const complete = {
  demand: true,
  // default: true,
  alias: 'c',
  desc: 'completed task'
}

const task_types = {
  alias: 't',
  desc: 'filter for type task status'
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
    task_types
  })
  .command('delete', 'Delete task', {
    description
  })
  .help().argv;

module.exports = {
  argv
}
