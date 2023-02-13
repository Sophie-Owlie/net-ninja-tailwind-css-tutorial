const burger = document.getElementById('burger')
const menu = document.getElementById('menu')

burger.addEventListener('click', (e) => {
  e.preventDefault()
  menu.classList.toggle('hidden')
})
