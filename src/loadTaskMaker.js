import { createElement, addListeners, createSVG, applySvgGradient, createIconButton} from './DOMtool.js';

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
      console.log('hello');
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
  const progressOptions = [ 'Not Started', 'Just Started', 'Halfway There', 'Almost Done', 'Complete'
  ];
  const progressForm = createFormField('progress-input', 'Progress', 'select', false, progressOptions)
  const tagOptions = [ 'Not Started', 'Just Started', 'Halfway There', 'Almost Done', 'Complete'
  ];
  const tagForm = createFormField('tag-input', 'Tag', 'select', false, tagOptions);

  const cancelTask = createElement('button', 'cancel-button', {id: 'cancel-task'}, 'X');
  cancelTask.addEventListener('click', () => modal.close());
  const submitTask = createElement('button', 'submit-button', {type: 'sumbit'}, 'Submit');
  submitTask.addEventListener('click', () => {
    preventDefault();
    addTask();
  })

  /*Assemble Modal*/
  document.body.append(modal);
  modal.append(taskForm);
  taskForm.append(leftSide, rightSide, cancelTask);
  leftSide.append(modalHeader, titleForm, descriptionForm);
  rightSide.append(dueDateForm, workTimeForm, progressForm, tagForm, submitTask);
}