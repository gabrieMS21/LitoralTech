
// --- MENU HAMBÚRGUER ---
const menuHamburger = document.querySelector(".menu-hamburger");
const menuLinks = document.querySelector(".menu-links");

menuHamburger.addEventListener("click", () => {
  menuHamburger.classList.toggle("active");
  menuLinks.classList.toggle("active");

  if (menuLinks.classList.contains("active")) {
    menuLinks.style.display = "flex";
    menuLinks.style.flexDirection = "column";
    menuLinks.style.alignItems = "center";
    menuLinks.style.justifyContent = "center";
    menuLinks.style.height = "80vh";
    menuLinks.style.width = "100vw";
    menuLinks.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    menuLinks.style.position = "absolute";
    menuLinks.style.top = "100%";
    menuLinks.style.left = "0";
    menuLinks.style.zIndex = "1000";
    menuLinks.style.transition = "all 0.5s ease-in-out";
    menuLinks.style.backdropFilter = "blur(10px)";
  } else {
    menuLinks.style.display = "none";
  }
});

menuLinks.addEventListener("click", () => {
  if (menuLinks.classList.contains("active")) {
    menuHamburger.classList.remove("active");
    menuLinks.classList.remove("active");
    menuLinks.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", function () {

    // --- CARROSSEL DE SERVIÇOS (SWIPER.JS) ---
    const servicesCarousel = document.querySelector('.services-carousel');
    if (servicesCarousel && typeof Swiper !== 'undefined') {
        new Swiper(servicesCarousel, {
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            slidesPerView: 1,
            spaceBetween: 20,
            breakpoints: {
                640: { slidesPerView: 2, spaceBetween: 20 },
                992: { slidesPerView: 3, spaceBetween: 30 },
                1200: { slidesPerView: 4, spaceBetween: 30 }
            }
        });
    }
    
});

document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const questionButton = item.querySelector(".faq-question");

    questionButton.addEventListener("click", () => {
      const isCurrentlyActive = item.classList.contains("active");

      // Fecha todos os outros itens antes de abrir o novo
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          otherItem.querySelector(".faq-question").setAttribute("aria-expanded", "false");
        }
      });

      // Alterna o estado do item clicado
      if (!isCurrentlyActive) {
        item.classList.add("active");
        questionButton.setAttribute("aria-expanded", "true");
      } else {
        item.classList.remove("active");
        questionButton.setAttribute("aria-expanded", "false");
      }
    });
  });
});