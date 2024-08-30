import {Task} from '../model/task.js';

export class TaskManager {
  static taskLibrary = TaskManager.loadFromStorage();
  static idCounter = JSON.parse(localStorage.getItem('storage-task-id-counter')) || 1;

  static getTask(taskId){
    let matchingTask;
    TaskManager.getAllTasks().forEach(task => {
     if(task.id == taskId){
      matchingTask = task;
      }
    });
    return matchingTask;
  }

  static getAllTasks(){
    return TaskManager.taskLibrary;
  }

  static addTask(details, id){
    TaskManager.taskLibrary.push({
      details: details,
      id: id});
    TaskManager.saveToStorage();
  }

  static deleteTask(taskId){
    let newTaskLibrary = [];

    TaskManager.taskLibrary.forEach(task => {
      if(task.id != taskId){
        newTaskLibrary.push(task);
      }
    });

    TaskManager.taskLibrary = newTaskLibrary;
    TaskManager.saveToStorage();
  }

  static editTask(id, title, description, dueDate, workTime, progress, tag){
    let task = TaskManager.getTask(id).details;
    task.setTitle(title);
    task.setDescription(description);
    task.setWorkTime(workTime);
    task.setDueDate(dueDate);
    task.setProgress(progress);
    task.setTag(tag);
    TaskManager.saveToStorage();
  }

  static idCounterIncrement(){
    TaskManager.idCounter++; 
    TaskManager.saveToStorage();
  }

  static getIdCounter(){
    return TaskManager.idCounter;
  }

  static saveToStorage(){
    localStorage.setItem('storage-tasks', JSON.stringify(TaskManager.taskLibrary))
    localStorage.setItem('storage-task-id-counter', JSON.stringify(TaskManager.idCounter));
  }

  static loadFromStorage(){
    const storedInfo = JSON.parse(localStorage.getItem('storage-tasks')) || [];
    const processedInfo = storedInfo.map(task => ({
      details: (new Task(task.details.title, task.details.description, task.details.dueDate, task.details.workTime, task.details.progress, task.details.tag)),
      id: task.id
    }));
    console.log(processedInfo);
    return processedInfo; 

  }
}