const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click ());

const buttons = document.querySelectorAll(".read-more");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.parentElement;
    card.classList.toggle("expanded");
    btn.textContent = card.classList.contains("expanded") ? "Read Less" : "Read More";
  });
});


const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    spaceBetween: 50,

  pagination: {
    el: '.swiper-pagination',
  },


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    }
  }

});

