let menuBtn = document.querySelector('.menu-btn__line');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
})