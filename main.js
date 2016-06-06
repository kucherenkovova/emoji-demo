

var buttons = document.querySelectorAll('button')
var target = document.querySelector('#target')

function inputHandler(evt) {
  var shortname = evt.srcElement.innerText
  target.innerHTML += emojione.toImage(shortname)
}

;[].forEach.call(buttons, function (button) {
  button.addEventListener('click', inputHandler)
})

var emojify = function (value) {
  return emojione.toImage(value)
}
