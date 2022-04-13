const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('mobile-menu');
}) 



window.addEventListener('scroll', () => {
  const navBar = document.querySelector('.nav-bar');
  
  navBar.classList.toggle('active-scroll', window.scrollY > 200)
})


const menuBtnList1 = document.querySelector('.menu-btn-list1');
const menuBtnList2 = document.querySelector('.menu-btn-list2');
const menuBtnList3 = document.querySelector('.menu-btn-list3');
const menuBtnList4 = document.querySelector('.menu-btn-list4');

menuBtnList1.addEventListener('click',() => {
  navMenu.classList.toggle('mobile-menu');
})
menuBtnList2.addEventListener('click',() => {
  navMenu.classList.toggle('mobile-menu');
})
menuBtnList3.addEventListener('click',() => {
  navMenu.classList.toggle('mobile-menu');
})
menuBtnList4.addEventListener('click',() => {
  navMenu.classList.toggle('mobile-menu');
})
