const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 15,
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // auto start
    autoplay: {
        delay: 5000,
      },

    speed: 1000,
    spaceBetween: 100,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    
  });