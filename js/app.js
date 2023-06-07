var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 250,
      depth: 600,
      modifier: 1.6,
      slideShadows: true,
    },
    loop: true,
    spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true
    
  });

  function nav(){
    const navegation = document.querySelector('.navegation');
    const menu = document.querySelector('.menu')

    navegation.classList.toggle("active");
    menu.classList.toggle("active");
  }