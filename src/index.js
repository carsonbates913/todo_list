import './style/index.css';
import { taskModal } from './scripts/taskModal.js'
import { renderTasks } from './scripts/index/taskList.js'
import { loadSideNav } from './script/sideNav.js'


document.addEventListener('DOMContentLoaded', () =>{
  loadSideNav();
  renderTasks();
  document.querySelector('.button-add-task').addEventListener("click", () => {taskModal.show()});
});