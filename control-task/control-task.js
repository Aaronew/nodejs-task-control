
//Import File System Packages
const fs = require('fs');

let listToDo = [];

// GENERATE AND GET DATA
const saveDB = () => {

  let data = JSON.stringify(listToDo);

  fs.writeFile(`db/data.json`, data, (err)=> {
    if (err) throw new Error('Error create archive json', err);
  });
}

const dataCharge = () => {

  try {
    listToDo = require('../db/data.json');
  } catch(err){
    listToDo = [];
  }

}

// Functions For Application
const createTask = (description) => {

  dataCharge();
  let task = {
      description,
      completed:false
  };

  listToDo.push(task);
  saveDB();
  return task;
}

const getListado = () => {
  dataCharge();
  return listToDo;
}

const updateTask = (description, completed = true) => {

  dataCharge();

  let index = listToDo.findIndex(tarea =>  tarea.description === description);

  if (index >= 0) {

    listToDo[index].completed = completed;
    saveDB();
    return "Task Completed";
  }else{

    return "Error Completing Task";
  }

}

const deleteTask = (description) => {

  dataCharge();

  let newList = listToDo.filter( tarea => {
    return tarea.description != description
  })

  if (listToDo.length === newList.length) {

    return false;
  }else{

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
