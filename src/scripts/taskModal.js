import { createElement} from '../tool/DOMtool.js';
import { Task } from '../model/task.js';
import { TaskManager } from '../data/taskManager.js';
import { renderTasks } from './index/taskList.js';
import {getCurrentTaskId, getIsEditing, setIsEditing} from '../state/stateManager.js';
export const taskModal = (function(){
  let modal;

  /*Create the HTML of Task Modal*/
  function createTaskModal() {
    /*Modal Structure*/
    modal = createElement('dialog', 'task-modal');
    const taskForm = createElement('form', 'create-task-form', {novalidate: ''});
    const leftSide = createElement('div', 'form-section');
    const rightSide = createElement('div', "form-section");

    /*Modal Header*/
    const modalHeader = createElement('h2','', '', 'New Task');


    /*Form Data*/
    const tagOptions = [ 'Academics', 'Work', 'Health', 'Personal', 'Chore'];
    const progressOptions = [ 'Not Started', 'Starting', 'Halfway', 'Almost', 'Complete'];

    /*Form Sections*/
    const titleForm = createFormField('title-input', 'Title', 'text', '', '', true);
    const descriptionForm = createFormField('description-input', 'Description', 'textArea');
    const dueDateForm = createFormField('due-date-input', 'Due Date', 'date', true);
    const workTimeForm = createFormField('work-time-input', 'Work Time', 'time', true);
    const progressForm = createFormField('progress-input', 'Progress', 'select', false, progressOptions)
    const tagForm = createFormField('tag-input', 'Tag', 'select', false, tagOptions);

    /*Cancel Button*/
    const cancelTask = createElement('button', 'cancel-button', {id: 'cancel-task'}, 'X');

    /*Submit Button*/
    const submitTask = createElement('button', 'submit-button', {type: 'submit'}, 'Submit');

    /*Assemble Modal*/
    document.body.append(modal);
    modal.append(taskForm);
    taskForm.append(leftSide, rightSide, cancelTask);
    leftSide.append(modalHeader, titleForm, descriptionForm);
    rightSide.append(dueDateForm, workTimeForm, progressForm, tagForm, submitTask);

    addEventListeners();
    //addFormValidation();
  }

  /*Add Event Listeners to HTML Elements*/
  function addEventListeners(){
    /*Submit Form*/
    document.querySelector('.create-task-form').addEventListener('submit', (event) => {

      closeModal();
      const taskForm = document.querySelector('.create-task-form');
    
      const title = taskForm['title-input'].value;
      const description = taskForm['description-input'].value;
      const dueDate = taskForm['due-date-input'].value;
      const workTime = taskForm['work-time-input'].value;
      const progressInput = taskForm['progress-input'].value;
      const tag = taskForm['tag-input'].value;

      if(getIsEditing()){
        TaskManager.editTask(getCurrentTaskId(), title, description, dueDate, workTime, progressInput, tag);
      }else{
      TaskManager.idCounterIncrement();
      const taskId = TaskManager.getIdCounter();

      const task = new Task(title, description, dueDate, workTime, progressInput, tag);
      TaskManager.addTask(task, taskId);
      }
      setIsEditing(false);
      renderTasks();
      clearInputs();
    });

    /*Cancel Button*/
    document.querySelector('.cancel-button').addEventListener('click', (event) => {
      event.preventDefault();
      setIsEditing(false);
      closeModal();
      clearInputs();
    })
  }

  /*Add Form Validation*/
  /*function addFormValidation() {
    const titleInput = document.querySelector('.title-input');
    titleInput.addEventListener('input', () => {
      titleInput.
    })
  }*/


  function prefillEdit(taskDetails){
    const taskForm = document.querySelector('.create-task-form');
    taskForm['title-input'].value = taskDetails.title;
    taskForm['description-input'].value = taskDetails.description;
    taskForm['due-date-input'].value = taskDetails.dueDate;
    taskForm['work-time-input'].value = taskDetails.workTime;
    taskForm['progress-input'].value = taskDetails.progress;
    taskForm['tag-input'].value = taskDetails.tag;

      document.querySelectorAll('input').forEach(input => {
        if((document.querySelector(`#${input.getAttribute('id')}-checker`)) && ((taskForm[`${input.getAttribute('id')}`].value !== ''))){ 
          document.querySelector(`#${input.getAttribute('id')}-checker`).click()
        }
      })
  }

//(taskForm[`${input.getAttribute('id')}`].value !== '')

  function showModal(){
    if(!document.querySelector('.task-modal')){
      createTaskModal();
    }
    
    document.querySelectorAll('input[type="checkbox"]').forEach(checker => {
      if(checker.checked){
        checker.click(); 
      }
    });
    /*&& (taskForm[`${input.getAttribute('id')}`].value != '')*/

    modal.showModal();
  }

  function closeModal(){
    modal.close();
  }

  return {
    show: showModal,
    close: closeModal,
    prefillEdit: prefillEdit
  }
})();



/*Form Field Fuction*/
function createFormField(inputId, labelText, inputType, hasToggle=false, selectorOptions=[], isRequired=false){
  const form = createElement('div', 'form-div');
  const label = createElement('label', '', {for: inputId}, labelText);
  let input;

  if(inputType== 'select'){
    input = createElement('select', '', {type: inputType, id: inputId, name: inputId, ...(isRequired && {required: true})});
    input.append(createElement('option', '', {value: '', disabled: '', hidden: '', selected: ''}, ''));
    selectorOptions.forEach(option => {
      const optionElement = createElement('option', '', {value: `${option}`}, `${option}`);
      input.append(optionElement);
    });
  }else if(inputType=='textArea')
    {
    input = createElement('textArea','', {type: inputType, id: inputId, name: inputId, ...(isRequired && {required: true})});
  }else
  {
    input = createElement('input','', {type: inputType, id: inputId, autocomplete: "off", ...(isRequired && {required: ''})});
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

/*Clear Inputs Function */

function clearInputs() {
  const taskForm = document.querySelector('.create-task-form');
    
  taskForm['title-input'].value = '';
  taskForm['description-input'].value = '';
  taskForm['due-date-input'].value = '';
  taskForm['work-time-input'].value = '';
  taskForm['progress-input'].value = '';
  taskForm['tag-input'].value = '';
}