import { createElement, addListeners, createSVG, applySvgGradient, createIconButton} from './DOMtool.js';

export function loadTaskModal() {
  /*Modal Structure*/
  const modal = createElement('dialog', 'task-modal');
  const taskForm = createElement('form', 'task-form');
  const leftSide = createElement('div', 'form-section');
  const rightSide = createElement('div', "form-section");

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

  const dueDateCheckerLabel = createElement('label', 'toggle-label', {for: 'due-date-checker'}, '');
  const dueDateChecker = createElement('input', '', {type: 'checkbox', id: 'due-date-checker'});

  const progressForm = createElement('div', 'form-div');
  const progressLabel = createElement('label', '', {for: 'progress-input'}, 'Progress');
  const progressInput =  createElement('input','', {type: 'text', id: 'progress-input'});

  const submitTask = createElement('button', 'task-submit', {type: 'sumbit'}, 'Submit');

  /*Assemble Modal*/
  document.body.append(modal);
  modal.append(taskForm);
  taskForm.append(leftSide, rightSide);
  leftSide.append(modalHeader, titleForm, descriptionForm);
  rightSide.append(dueDateForm, progressForm, submitTask);

  titleForm.append(titleLabel, titleInput);
  descriptionForm.append(descriptionLabel, descriptionInput);
  progressForm.append(progressLabel, progressInput);
  dueDateForm.append(dueDateLabel, dueDateCheckerLabel)

  dueDateCheckerLabel.append(dueDateChecker);
}