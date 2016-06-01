
document.getElementById('clickMe').addEventListener('click', function () {
  var test = document.getElementById('test')
  test.innerHTML = emojify(test.innerHTML)
})

var emojify = function (value) {
  return emojione.toImage(value)
}
