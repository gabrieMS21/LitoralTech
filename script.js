

document.addEventListener("DOMContentLoaded", function () {
    // --- LÓGICA DO MENU HAMBÚRGUER ---
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileNav = document.getElementById('mobile-nav');

    if (hamburgerBtn && mobileNav) {
        const navLinks = mobileNav.querySelectorAll('a');

        // Função para abrir e fechar o menu
        const toggleMenu = () => {
            hamburgerBtn.classList.toggle('is-active');
            mobileNav.classList.toggle('is-active');
            document.body.classList.toggle('no-scroll');
        };

        // Adiciona o evento de clique ao botão
        hamburgerBtn.addEventListener('click', toggleMenu);

        // Adiciona evento para fechar o menu ao clicar em um link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mobileNav.classList.contains('is-active')) {
                    toggleMenu();
                }
            });
        });
    }

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