

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
document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", function () {
    const faqItem = this.parentElement;
    const answer = faqItem.querySelector(".faq-answer");

    if (faqItem.classList.contains("active")) {
      // fechar
      answer.style.height = answer.scrollHeight + "px";
      requestAnimationFrame(() => {
        answer.style.height = "0";
      });
      faqItem.classList.remove("active");
    } else {
      // abrir
      answer.style.height = "0"; // força 0
      faqItem.classList.add("active");
      requestAnimationFrame(() => {
        answer.style.height = answer.scrollHeight + "px";
      });
    }
  });
});
