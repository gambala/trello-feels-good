do ->
  style = document.createElement('link')
  style.rel = 'stylesheet'
  style.type = 'text/css'
  style.href = chrome.extension.getURL('dist/trello.css')
  (document.head or document.documentElement).appendChild style

$(document).ready ->
  setInterval (->
    composer = document.querySelector('.card-composer.hide')
    composer.remove() if composer
  ), 1000
