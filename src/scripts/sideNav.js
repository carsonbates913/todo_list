export function loadSideNav(){
  sideNav = createElement('nav', 'side-nav');
  logoSection = createElement('div', 'nav-section-logo');
  pagesSection = createElement('ul', 'nav-section-pages');

  homePageTab = createElement('li', 'nav-section-pages-item');
  tasksPageTab = createElement('li', 'nav-section-pages-item');
  calendarPageTab = createElement('li', 'nav-section-pages-item');
  analyticsPageTab = createElement('li', 'nav-section-pages-item');

  /*Assemble Side Nav*/
  pagesSection.append(homePageTab, tasksPageTab, calendarPageTab, analyticsPageTab);
  sideNav.append(logoSection, pagesSection); 
  document.body.append(sideNav);
}