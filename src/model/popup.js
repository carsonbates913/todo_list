let currentPopup = null;
let isPopupActive = false;
let anchor = null;
let functionParam = null;

export function showPopup(event, id, popupGenerator, anchorElement, functionParamElement) {
  event.stopPropagation();

  //Check if same button clicked
  //If so, close popup
  if(anchor === anchorElement){
    closePopup();
    return; 
  }

  isPopupActive && closePopup();

  functionParam = functionParamElement;
  functionParam();
  anchor = anchorElement;
  currentPopup = document.querySelector(id) || popupGenerator();

  toggleVisibility();
  adjustLocation(anchorElement);
  document.addEventListener('click', handleClosePopup);

  isPopupActive = true;
}

function toggleVisibility() {
  currentPopup.classList.toggle('popup-hidden');
}

function adjustLocation(anchorElement){
  const rect = anchorElement.getBoundingClientRect();
  currentPopup.style.top = `${rect.bottom + 0}px`
  currentPopup.style.left = `${rect.right - (rect.width/2)}px`
}

export function closePopup() {
  toggleVisibility();
  currentPopup = null;
  isPopupActive = false;
  anchor = null;
  functionParam();
  document.removeEventListener('click', handleClosePopup);
}

function handleClosePopup(event) {
  console.log('handler');
  if(!currentPopup.contains(event.target) ){
      closePopup();
  }
}