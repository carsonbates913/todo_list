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

      const dueDate = createElement('div', 'property', {}, task.dueDate);
      const workTime = createElement('div', 'property', {}, task.workTime);
      const progress = createElement('div', 'property', {}, task.progress);
      const tag = createElement('div', 'property', '', task.tag);

      const iconSection = createElement('div', 'icon-section');
      const dueDateIcon = createSVG('0 0 512 512', 'M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z', 'task-icon');
      const dueDateDiv = createElement('div','icon-div', {id: 'due-date-icon'});
      dueDateDiv.append(dueDateIcon);
      const workTimeIcon = createSVG('0 0 448 512', 'M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z', 'task-icon');
      const workTimeDiv = createElement('div','icon-div', {id: 'work-time-icon'});
      workTimeDiv.append(workTimeIcon);
      const progressIcon = createSVG('0 0 512 512', 'M448 160l-128 0 0-32 128 0 0 32zM48 64C21.5 64 0 85.5 0 112l0 64c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48L48 64zM448 352l0 32-256 0 0-32 256 0zM48 288c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48L48 288z', 'task-icon');
      const progressDiv = createElement('div','icon-div', {id: 'progress-icon'});
      progressDiv.append(progressIcon);
      const categoryIcon = createSVG('0 0 576 512', 'M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z', 'task-icon');
      const categoryDiv = createElement('div','icon-div', {id: 'category-icon'});
      categoryDiv.append(categoryIcon);

      propertiesSection.append(iconSection,dueDate, workTime, progress, tag);

      iconSection.append(dueDateDiv, workTimeDiv, progressDiv, categoryDiv);


      taskElement.append(textSection, propertiesSection);
      textSection.append(title, description);

      container.append(taskElement);
    });
  }
}

