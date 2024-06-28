const mobileMenuEl = document.querySelector('.menu');
const headerBurgerBtnEl = document.querySelector('.header__menu-btn');
const menuCloseBtnEl = document.querySelector('.menu__close-btn');

headerBurgerBtnEl.addEventListener('click', () => {
  mobileMenuEl.classList.add('menu_active');
  document.body.classList.add('no-scroll');
});

menuCloseBtnEl.addEventListener('click', () => {
  mobileMenuEl.classList.remove('menu_active');
  document.body.classList.remove('no-scroll');
});
