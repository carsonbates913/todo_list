let currentTaskId;

export function setCurrentTaskId(value) {
  currentTaskId = value;
}
export function getCurrentTaskId() {
  return currentTaskId;
}

let isEditing = false;

export function setIsEditing(value) {
  isEditing = value;
}
export function getIsEditing() {
  return isEditing;
}

export let isNavOpen = false;