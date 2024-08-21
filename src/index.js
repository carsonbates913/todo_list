import ('./index.css');
import { loadPage } from './loadPage.js'; 
import { loadTaskModal } from './loadTaskMaker.js'


document.addEventListener('DOMContentLoaded', () =>{
  loadPage();
  loadTaskModal();
})
