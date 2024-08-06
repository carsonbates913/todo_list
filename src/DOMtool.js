function createElement(tag, className = '', attributes = {}, innerText = '') {
  const element = document.createElement(tag);
  if(className) element.className = className;
  if(attributes){ 
    for(const i of Object.keys(attributes)){
      element.setAttribute(i, attributes[i]);
      }
    }
  if(innerText) element.innerText = innerText;
  return element;
}

function addListeners(element, events){
  for (const i of Object.keys(events)){
    element.addEventListener(i, events[i]);
  }
}

export { createElement, addListeners };