import { createElement, addListeners, createSVG, applySvgGradient, createIconButton} from './DOMtool.js';

export function loadTaskModal() {
  /*Modal Structure*/
  const modal = createElement('dialog', 'task-modal');
  const taskForm = createElement('form', 'task-form');
  const leftSide = createElement('div', 'form-section');
  const rightSide = createElement('div', "form-section");


  function createFormField(sectionName, labelText, hasToggle = false, selectorOptions = []){
    const form = createElement('div', 'form-div');
    const label = createElement('label', '', {for: 'title-input'}, `${labelText}`);
    const input =  createElement('input','', {type: 'text', id: 'title-input'});
  }
  /*Modal Sections*/
  const modalHeader = createElement('h2','', '', 'New Task');

  const titleForm = createElement('div', 'form-div');
  const titleLabel = createElement('label', '', {for: 'title-input'}, 'Title');
  const titleInput =  createElement('input','', {type: 'text', id: 'title-input'});

  const descriptionForm = createElement('div', 'form-div');
  const descriptionLabel = createElement('label', '', {for: 'description-input'}, 'Description');
  const descriptionInput =  createElement('input', '', {type: 'text', id: 'description-input'});

  const dueDateForm = createElement('div', 'form-div');
  const dueDateLabel = createElement('label', '', {for: 'due-date-input'}, 'Due Date');
  const dueDateInput = createElement('input', '', {type: 'date', id: 'due-date-input',  style: 'display: none'});
  const dueDateToggle = createElement('label', 'toggle-button', {for: 'due-date-checker'}, '');
  const dueDateThumb = createElement('input', '', {type: 'checkbox', id: 'due-date-checker'});

  const workTimeForm = createElement('div', 'form-div');
  const workTimeLabel = createElement('label', '', {for: 'work-time-input'}, 'Work Period');
  const workTimeInput = createElement('input', '', {type: 'time', id: 'work-time-input',  style: 'display: none'});
  const workTimeToggle = createElement('label', 'toggle-button', {for: 'work-time-checker'}, '');
  const workTimeThumb = createElement('input', '', {type: 'checkbox', id: 'work-time-checker'});

  const progressForm = createElement('div', 'form-div');
  const progressLabel = createElement('label', '', {for: 'progress-input'}, 'Progress');
  const progressInput =  createElement('select','', {type: 'select', id: 'progress-input'});
  progressInput.append(createElement('option', '', {value: '', disabled: '', hidden: '', selected: ''}, ''));
  const progressOptions = [ 'Not Started', 'Just Started', 'Halfway There', 'Almost Done', 'Complete'
  ];
  progressOptions.forEach(option => {
    const optionElement = createElement('option', '', {value: `${option}`}, `${option}`);
    progressInput.append(optionElement);
  });

  const tagForm = createElement('div', 'form-div');
  const tagLabel = createElement('label', '', {for: 'tag-input'}, 'Tag');
  const tagInput =  createElement('select','', {type: 'select', id: 'tag-input'});
  tagInput.append(createElement('option', '', {value: '', disabled: '', hidden: '', selected: ''}, ''));
  const tagOptions = [ 'Not Started', 'Just Started', 'Halfway There', 'Almost Done', 'Complete'
  ];
  tagOptions.forEach(option => {
    const optionElement = createElement('option', '', {value: `${option}`}, `${option}`);
    tagInput.append(optionElement);
  });

  const cancelTask = createElement('button', 'cancel-button', {id: 'cancel-task'}, 'X');
  const submitTask = createElement('button', 'submit-button', {type: 'sumbit'}, 'Submit');

  /*Assemble Modal*/
  document.body.append(modal);
  modal.append(taskForm);
  taskForm.append(leftSide, rightSide, cancelTask);
  leftSide.append(modalHeader, titleForm, descriptionForm);
  rightSide.append(dueDateForm, workTimeForm, progressForm, tagForm, submitTask);

  titleForm.append(titleLabel, titleInput);
  descriptionForm.append(descriptionLabel, descriptionInput);
  progressForm.append(progressLabel, progressInput);
  dueDateForm.append(dueDateLabel, dueDateToggle, 
  dueDateInput);
  workTimeForm.append(workTimeLabel, workTimeToggle, workTimeInput);
  tagForm.append(tagLabel, tagInput);

  dueDateToggle.append(dueDateThumb);
  workTimeToggle.append(workTimeThumb);

  dueDateThumb.addEventListener('change', ()=> {
    if(dueDateThumb.checked){
      dueDateInput.style.display ='inline-block';
    }else {
      dueDateInput.style.display = 'none';
      dueDateInput.value = '';
    }
  });

  workTimeThumb.addEventListener('change', ()=> {
    if(workTimeThumb.checked){
      workTimeInput.style.display ='inline-block';
    }else {
      workTimeInput.style.display = 'none';
      workTimeInput.value = '';
    }
  });
  cancelTask.addEventListener('click', () => modal.close());
}