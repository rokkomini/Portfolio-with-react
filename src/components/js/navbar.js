const navbar = document.getElementsByClassName('navbar')

window.scroll(function() {
  if ((this).scrollTop() > 50) {
    navbar.addClass('collapsed')
  } else {
    navbar.removeClass('collapsed')
  }
})
window.scroll(function() {
  if ((this).scrollTop() > 50) {
    navbar.style.backgroundColor = 'red'
  } else {
    navbar.style.backgroundColor = 'blue'
  }
})