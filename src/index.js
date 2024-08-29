import './style/index.css';
import { taskModal } from './scripts/taskModal.js'
import { renderTasks } from './scripts/index/taskList.js'
import { loadSideNav } from './scripts/sideNav.js'


document.addEventListener('DOMContentLoaded', () =>{
  loadSideNav();
  renderTasks();
  document.querySelector('.button-add-task').addEventListener("click", () => {taskModal.show()});
  document.querySelector('.button-menu').addEventListener('click', () => {
    document.querySelector('.container-side-nav').classList.toggle('nav-active');
    document.querySelector('.home-page').classList.toggle('nav-active');
  })
});