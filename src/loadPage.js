import { createElement, addListeners } from './DOMtool.js';

export function loadPage() {
  const header = createElement('header');
  const container = createElement('div', 'header-container');
  const welcome = createElement('div', 'header-welcome');
  const nav = createElement('nav', 'header-nav');
  const menuButton = createElement('button', 'menu nav-button', '', 'menu');
  const filterButton = createElement('button', 'filter nav-button', '', 'filter');
  const taskButton = createElement('button', 'nav-button', '', 'add task');

  const date = createElement('h1', '', '', 'August 5th');
  const greeting = createElement('h3', '', '', 'Welcome Carson');

  const icon = createElement('svg', '', {xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 512 512'}, '');
  filterButton.appendChild(icon);

  const path = createElement('path', '', {d: 'M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z'}, '');

  icon.appendChild(path);


  document.body.appendChild(header);
  header.appendChild(container);
  container.append(welcome, nav);
  welcome.append(date, greeting);
  nav.append(menuButton, filterButton, taskButton);
}