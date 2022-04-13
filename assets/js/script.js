const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('mobile-menu');
}) 


window.addEventListener('scroll', () => {
  const navBar = document.querySelector('.nav-bar');

  navBar.classList.toggle('active-scroll', window.scrollY > 200)
})