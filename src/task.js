import { createElement, addListeners, createSVG, applySvgGradient, createIconButton} from './DOMtool.js';

let currentTask = null;

export class Task {
  constructor(id, title, description, dueDate, workTime, progress, tag){
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.workTime = workTime;
    this.progress = progress;
    this.tag = tag;
  }

  getTitle(){
    return this.title;
  }

  setTitle(title){
    this.title = title;
  }

  getDescription(){
    return this.description;
  }

  setDescription(description){
    this.description = description;
  }

  getDueDate() {
    return this.dueDate;
  }

  setDueDate(dueDate){
    this.dueDate = dueDate;
  }

  getWorkTime(){
    return this.workTime;
  }

  setWorkTime(workTime){
    this.workTime = workTime;
  }

  getProgress(){
    return this.progress;
  }

  setProgress(progress){
    this.progress = progress;
  }

  getTag(){
    return this.tag;
  }
  
  setTag(tag){
    this.tag = tag;
  }
}

export class TaskManager {
  static taskLibrary = []


  static getAllTasks(){
    return TaskManager.taskLibrary;
  }

  static addTask(task){
    TaskManager.taskLibrary.push(task);
  }

  static deleteTask(task){
    TaskManager.taskLibrary.splice(taskLibrary.indexOf(task), 1);
  }

  static editTask(index, title, description, workTime, dueDate, progress, tag){
    let task = TaskManager.taskLibrary[index];
    task.setTitle(title);
    task.setDescription(description);
    task.setWorkTime(workTime);
    task.setDueDate(dueDate);
    task.setProgress(progress);
    task.setTag(tag);
  }
}