import './style/index.css';
import { taskModal } from './scripts/taskModal.js'
import { renderTasks } from './scripts/index/taskList.js'


document.addEventListener('DOMContentLoaded', () =>{
  renderTasks();
  document.querySelector('.button-add-task').addEventListener("click", () => {taskModal.show()});
});