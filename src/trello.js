const initStyles = () => {
  const style = document.createElement('link');
  style.rel = 'stylesheet';
  style.type = 'text/css';
  style.href = chrome.extension.getURL('trello.css');
  (document.head || document.documentElement).appendChild(style);
}

const removeCardComposer = () => {
  const composer = document.querySelector('.card-composer.hide');
  if (composer) { composer.remove(); }
}

initStyles();

$(document).ready(() => {
  setInterval(removeCardComposer, 1000);
});
