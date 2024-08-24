import { createElement, addListeners, createSVG, applySvgGradient, createIconButton} from './DOMtool.js';

import {Task, TaskManager } from './task.js';

import { renderTasks } from './ui.js';

const idCounter = 0; 

export function loadTaskModal() {
  /*Modal Structure*/
  const modal = createElement('dialog', 'task-modal');
  const taskForm = createElement('form', 'task-form');
  const leftSide = createElement('div', 'form-section');
  const rightSide = createElement('div', "form-section");

/*Form Field Fuction*/
  function createFormField(inputId, labelText, inputType, hasToggle = false, selectorOptions = []){
    const form = createElement('div', 'form-div');
    const label = createElement('label', '', {for: inputId}, labelText);
    let input;

    if(inputType== 'select'){
      input = createElement('select', '', {type: inputType, id: inputId});
      input.append(createElement('option', '', {value: '', disabled: '', hidden: '', selected: ''}, ''));
      selectorOptions.forEach(option => {
        const optionElement = createElement('option', '', {value: `${option}`}, `${option}`);
        input.append(optionElement);
      });
    }else if(inputType=='textArea')
      {
      input = createElement('textArea','', {type: inputType, id: inputId});
    }else
    {
      input = createElement('input','', {type: inputType, id: inputId});
    }
    form.append(label, input);

    if(hasToggle) {
      input.style.display = 'none';
      const toggle = createElement('label', 'toggle-button',{for: `${inputId}-checker`});
      const thumb = createElement('input', '', {type: 'checkbox', id: `${inputId}-checker`});
      thumb.addEventListener('change', ()=> {
        if(thumb.checked){
          input.style.display ='inline-block';
        }else {
          input.style.display = 'none';
          input.value = '';
        }
      });
      toggle.append(thumb);
      form.append(toggle);
    }

    return form;
  }

  /*Modal Sections*/
  const modalHeader = createElement('h2','', '', 'New Task');

  const titleForm = createFormField('title-input', 'Title', 'text');
  const descriptionForm = createFormField('description-input', 'Description', 'textArea');
  const dueDateForm = createFormField('due-date-input', 'Due Date', 'date', true);
  const workTimeForm = createFormField('work-time-input', 'Work Time', 'time', true);
  const progressOptions = [ 'Not Started', 'Starting', 'Halfway', 'Almost', 'Complete'
  ];
  const progressForm = createFormField('progress-input', 'Progress', 'select', false, progressOptions)
  const tagOptions = [ 'Academics', 'Work', 'Health', 'Personal', 'Chore'
  ];
  const tagForm = createFormField('tag-input', 'Tag', 'select', false, tagOptions);

  const cancelTask = createElement('button', 'cancel-button', {id: 'cancel-task'}, 'X');
  cancelTask.addEventListener('click', (event) => {
    event.preventDefault();
    modal.close()});

  const submitTask = createElement('button', 'submit-button', '', 'Submit');
  submitTask.addEventListener('click', handleSubmitTask)

  function handleSubmitTask(event) {
    event.preventDefault();
    modal.close();
    const title = document.querySelector('#title-input').value;
    const description = document.querySelector('#description-input').value;
    const dueDate = document.querySelector('#due-date-input').value;
    const workTime = document.querySelector('#work-time-input').value;
    const progressInput = document.querySelector('#progress-input').value;
    const tag = document.querySelector('#tag-input').value;

    idCounter++;
    const taskId = idCounter;

    const task = new Task(taskId, title, description, dueDate, workTime, progressInput, tag);
    TaskManager.addTask(task);
    renderTasks();
    clearInputs();
  }

  /*Assemble Modal*/
  document.body.append(modal);
  modal.append(taskForm);
  taskForm.append(leftSide, rightSide, cancelTask);
  leftSide.append(modalHeader, titleForm, descriptionForm);
  rightSide.append(dueDateForm, workTimeForm, progressForm, tagForm, submitTask);
}

function clearInputs() {
  document.querySelector('#title-input').value = '';
  document.querySelector('#description-input').value = '';
  document.querySelector('#due-date-input').value = '';
  document.querySelector('#work-time-input').value = '';
  document.querySelector('#progress-input').value = '';
  document.querySelector('#tag-input').value ='';
}