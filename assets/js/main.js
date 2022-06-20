const heroList = document.querySelectorAll('.slider-lg__indicator')
const notesList = document.querySelectorAll('.slider-lg__note')

let index = 0;
let interval = 3000;

setInterval(() => {
  heroList[index].classList.toggle('active')
  notesList[index].classList.toggle('active')
  index = (index + 1) % heroList.length;
  heroList[index].classList.toggle('active')
  notesList[index].classList.toggle('active')
}, interval)
