import ('./index.css'); 
import { loadTaskModal } from './loadTaskMaker.js'

loadTaskModal();


document.addEventListener('DOMContentLoaded', () =>{

  document.querySelector('.button-add-task').addEventListener("click", () => {document.querySelector('.task-modal').showModal()});
  loadPage();
  loadTaskModal();
})

console.log('video');