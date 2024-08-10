import { createElement, addListeners, createSVG, applySvgGradient, createIconButton} from './DOMtool.js';

export function loadTaskModal() {
  const modal = createElement('dialog', 'task-modal', '', '');
  const taskForm = createElement('form', 'task-form');
  const leftSide = createElement('div', 'left-side');
  const rightSide = createElement('div', "right-side");

  const modalTitle = createElement('h2','modal-title', '', 'New Task');

  const titleForm = createElement('div', 'form-div');
  const titleLabel = createElement('label', '', '', 'Title');
  const titleInput =  createElement('input', 'title-input', {type: 'text'});

  const descriptionForm = createElement('div', 'form-div');
  const descriptionLabel = createElement('label', '', '', 'Description');
  const descriptionInput =  createElement('input', 'description-input', {type: 'text', id: 'description-input'});

  const progressForm = createElement('div', 'form-div');
  const progressLabel = createElement('label', '', '', 'Progress');
  const progressInput =  createElement('input','progress-input', {type: 'text'});

  const submitTask = createElement('button', 'task-submit', {type: 'sumbit'}, 'Submit');

  /*Assemble Modal*/
  document.body.appendChild(modal);
  modal.appendChild(taskForm);
  taskForm.append(leftSide, rightSide);
  leftSide.append(modalTitle, titleForm, descriptionForm);
  titleForm.append(titleLabel, titleInput);
  descriptionForm.append(descriptionLabel, descriptionInput);
  rightSide.append(progressForm, submitTask);
  progressForm.append(progressLabel, progressInput);
}