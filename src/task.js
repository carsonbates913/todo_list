import { createElement, addListeners, createSVG, applySvgGradient, createIconButton} from './DOMtool.js';

export class Task {
  constructor(title, description, dueDate, workTime, progress, tag){
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
    return taskLibrary;
  }

  static addTask(task){
    taskLibrary.push(task);
  }

  static deleteTask(task){
    taskLibrary.splice(taskLibrary.indexOf(task), 1);
  }

  static editTask(index, title, description, workTime, dueDate, progress, tag){
    let task = taskLibrary[index];
    task.setTitle(title);
    task.setDescription(description);
    task.setWorkTime(workTime);
    task.setDueDate(dueDate);
    task.setProgress(progress);
    task.setTag(tag);
  }
}