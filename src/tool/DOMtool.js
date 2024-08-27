function createElement(tag, className = '', attributes = {}, innerText = '') {
  const element = document.createElement(tag);
  if(className){
    const classArray = className.split(' ');
    classArray.forEach(cls => element.classList.add(cls));
  }
  if(attributes){ 
    for(const i of Object.keys(attributes)){
      element.setAttribute(i, attributes[i]);
      }
    }
  if(innerText) element.innerText = innerText;
  return element;
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

export { createElement, createSVG, applySvgGradient};