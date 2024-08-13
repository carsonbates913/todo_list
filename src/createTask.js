import { createElement, addListeners, createSVG, applySvgGradient, createIconButton} from './DOMtool.js';

const taskLibrary = [];

export class Task {
  constructor(title, description, dueDate, workTime, progress, tag){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.workTime = workTime;
    this.progress = progress;
    this.tag = tag;
  }

  addTask() {
    taskLibrary.push(this);
    this.generateTasks();
    console.log(taskLibrary);
  }

  generateTasks() {
    const container = document.querySelector('.task-container');
    container.innerHTML = '';
    taskLibrary.forEach( task => {
      const taskElement = createElement('div', 'task');
      const textSection = createElement('div', 'task-text');
      const propertiesSection = createElement('div', 'task-properties');
      const title = createElement('h3', 'task-title', '', task.title);
      const description = createElement('p', 'task-description','', task.description);

      taskElement.append(textSection, propertiesSection);
      textSection.append(title, description);

      container.append(taskElement);
    });
  }
}

