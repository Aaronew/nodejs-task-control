//Import File System Packages
const fs = require('fs');

let listToDo = [];

// GENERATE AND GET DATA
const saveDB = () => {

  let data = JSON.stringify(listToDo);

  fs.writeFile(`db/data.json`, data, (err) => {
    if (err) throw new Error('Error create archive json', err);
  });
}

const dataCharge = () => {

  try {
    listToDo = require('../db/data.json');
  } catch (err) {
    listToDo = [];
  }

}

// Functions For Application
const createTask = (description) => {

  dataCharge();

  let task = {
    description,
    completed: false
  };

  let index = listToDo.findIndex(task => task.description === description);

  if (index == -1) {

    listToDo.push(task);

    saveDB();
    return true;
  } else {

    return false
  }

}

const getListado = (type_task) => {

  dataCharge();

  if (type_task !== undefined) {

    let task_filter = getListadoFilter(type_task);

    return task_filter;
  }

  return listToDo;
}

const getListadoFilter = (type_task) => {

  let listToDoFilter = [];

  if (type_task == "true" || type_task =="false") {

    if (type_task == "true") {
      type_task = true;
    }else if (type_task == "false") {
      type_task = false;
    }

    for (let task of listToDo) {

      if (task.completed == type_task) {

        listToDoFilter.push(task);
      }
    }

  }else{

    listToDoFilter = [];
  }

  return listToDoFilter;

}

const updateTask = (description, completed) => {

  if (completed == "true") {

    completed = true;
  } else if (completed == "false") {

    completed == false;
  } else {
    return "Status Value Not Valid"
  }

  dataCharge();

  let index = listToDo.findIndex(task => task.description === description);

  if (index >= 0) {

    listToDo[index].completed = completed;
    saveDB();
    return "Task Completed";
  } else {

    return "Error Completing Task";
  }

}

const deleteTask = (description) => {

  dataCharge();

  let newList = listToDo.filter(tarea => {
    return tarea.description != description
  })

  if (listToDo.length === newList.length) {

    return false;
  } else {

    listToDo = newList;
    saveDB();
    return "Correctly Deleted Task";
  }

}

// EXPORTS
module.exports = {
  getListado,
  createTask,
  updateTask,
  deleteTask
}
