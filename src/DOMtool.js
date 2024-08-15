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

function createSVG(viewBox, path, className){
  const svgns = "http://www.w3.org/2000/svg";

  const svgElement = document.createElementNS(svgns, "svg");
  svgElement.setAttribute("viewBox", viewBox);
  const svgPath = document.createElementNS(svgns, "path");
  svgPath.setAttribute("d", path);

  svgElement.appendChild(svgPath);
  svgElement.classList.add(className);

  return svgElement;
}

function applySvgGradient(svgElement, colors , degree = '0', id = 'gradient'
){
  const svgns = "http://www.w3.org/2000/svg";

  const defs = document.createElementNS(svgns, 'defs');
  const linearGradient = document.createElementNS(svgns, 'linearGradient');

  linearGradient.setAttribute("x1", "0%");
  linearGradient.setAttribute("y1", "0%");
  linearGradient.setAttribute("x2", "100%");
  linearGradient.setAttribute("y2", "100%");
  linearGradient.setAttribute("id", id);
  linearGradient.setAttribute('gradientTransform', `rotate(${degree})`);

  colors.forEach( (color, index) => {
    const stop = document.createElementNS(svgns, 'stop');
    stop.setAttribute('offset', `${(index/(colors.length-1)) * 100}%`);
    stop.setAttribute('stop-color', `${color}`);
    linearGradient.appendChild(stop);
  })
  defs.appendChild(linearGradient);
  svgElement.appendChild(defs);

  const targetElement = svgElement.querySelector('path, rect, circle, ellipse, polygon, polyline');
  targetElement.setAttribute("fill", `url(#${id})`);
}

const createIconButton = (buttonClass, svg) => {
  const button = createElement('button', buttonClass);
  button.appendChild(svg);
  return button;
};

export { createElement, addListeners, createSVG, applySvgGradient, createIconButton};