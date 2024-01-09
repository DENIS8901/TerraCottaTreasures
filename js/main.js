const menubtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__menu-list');

menubtn.addEventListener('click',()=> {
    menuMobile.classList.toggle('menu-open')
});

const swiperOne = new Swiper('.feedback__slider', {
    loop: true,

    pagination: {
      el: '.swiper-pagination',
    },
  });

  const swiperTwo = new Swiper('.certificates__slider', {
    loop: true,
    slidesPerView: "2",
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
    },
  });