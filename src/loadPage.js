import { createElement, addListeners, createSVG, applySvgGradient } from './DOMtool.js';


export function loadPage() {
  const header = createElement('header');
  const container = createElement('div', 'header-container');
  const welcome = createElement('div', 'header-welcome');
  const nav = createElement('nav', 'header-nav');

  const date = createElement('h1', '', '', 'August 5th');
  const greeting = createElement('h3', '', '', 'Welcome, Carson');

  const menuButton = createElement('button', 'menu nav-button');
  const filterButton = createElement('button', 'filter nav-button');
  const taskButton = createElement('button', 'nav-button');

  const filterIcon = createSVG('0 0 512 512', 'M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z');

  const menuIcon = createSVG('0 0 448 512', 'M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z');

  const taskIcon = createSVG('0 0 448 512', 'M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z');

  applySvgGradient(filterIcon, ['blue', 'pink'], 0, 'filterGradient');
  applySvgGradient(menuIcon, ['blue', 'pink'], 0, 'menuGradient');
  applySvgGradient(taskIcon, ['blue', 'pink'], 0, 'taskGradient');


  filterButton.appendChild(filterIcon);
  menuButton.appendChild(menuIcon);
  taskButton.appendChild(taskIcon);


  document.body.appendChild(header);
  header.appendChild(container);
  container.append(welcome, nav);
  welcome.append(date, greeting);
  nav.append(menuButton, filterButton, taskButton);

  const content = createElement('div', 'content', '', '');
  document.body.appendChild(content);

  const taskContainer = createElement('div', 'task-container', '', '');
  content.appendChild(taskContainer);

  const taskHeader = createElement('h2', '', 'Tasks', '');
  taskContainer 

}