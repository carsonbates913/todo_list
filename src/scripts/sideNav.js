import { createElement, createSVG, applySvgGradient} from '../tool/DOMtool.js';

export function loadSideNav(){
  const navContainer = createElement('div', 'container-side-nav');
  const overlay = createElement('div', 'side-nav-overlay');
  const sideNav = createElement('nav', 'side-nav');
  const logoSection = createElement('div', 'nav-section-logo', '', 'CDB');
  const pagesSection = createElement('ul', 'nav-section-pages');

  const homePageTab = createElement('li', 'nav-section-pages-item', '', 'Home');
  const tasksPageTab = createElement('li', 'nav-section-pages-item', '', 'Tasks');
  const calendarPageTab = createElement('li', 'nav-section-pages-item', '', 'Calendar');
  const analyticsPageTab = createElement('li', 'nav-section-pages-item', '', 'Analytics');

  const exitButton = createElement('button', 'nav-button-exit', '', 'X');

  exitButton.addEventListener('click', () => {
    document.querySelector('.container-side-nav').classList.toggle('nav-active');
    document.querySelector('.home-page').classList.toggle('nav-active');
  })

  /*Assemble Side Nav*/
  pagesSection.append(homePageTab, tasksPageTab, calendarPageTab, analyticsPageTab);
  sideNav.append(logoSection, pagesSection, exitButton); 
  navContainer.append(overlay, sideNav);
  document.body.append(navContainer);
}