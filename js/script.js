document.addEventListener("DOMContentLoaded", function () {
    
    // --- LÓGICA DO MENU HAMBURGUER (NOVO) ---
    const header = document.getElementById('main-header');
    const navToggle = document.querySelector('.header-nav__toggle');
    const navMenu = document.querySelector('.header-nav__menu');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            const isOpened = header.classList.toggle('nav-is-open');
            navToggle.setAttribute('aria-expanded', isOpened);
            
            // Atualiza a label para acessibilidade
            if (isOpened) {
                navToggle.setAttribute('aria-label', 'Fechar menu de navegação');
                document.body.classList.add('nav-open-no-scroll');
            } else {
                navToggle.setAttribute('aria-label', 'Abrir menu de navegação');
                document.body.classList.remove('nav-open-no-scroll');
            }
        });
    }

    // Fecha o menu ao clicar em um link
    if (navMenu) {
        navMenu.addEventListener('click', (e) => {
            if (e.target.classList.contains('header-nav__link')) {
                header.classList.remove('nav-is-open');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.setAttribute('aria-label', 'Abrir menu de navegação');
                document.body.classList.remove('nav-open-no-scroll');
            }
        });
    }

    // --- LÓGICA DO ACORDEON (FAQ) ---
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach((item) => {
        const questionButton = item.querySelector(".faq-question");
        questionButton.addEventListener("click", () => {
            const isCurrentlyActive = item.classList.contains("active");
            // Fecha todos os outros itens
            faqItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                    otherItem.querySelector(".faq-question").setAttribute("aria-expanded", "false");
                }
            });
            // Alterna o item clicado
            if (!isCurrentlyActive) {
                item.classList.add("active");
                questionButton.setAttribute("aria-expanded", "true");
            } else {
                item.classList.remove("active");
                questionButton.setAttribute("aria-expanded", "false");
            }
        });
    });

    // --- INICIALIZAÇÃO DO AOS (ANIMAÇÕES DE SCROLL) ---
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true, // A animação acontece apenas uma vez
            duration: 800,
            delay: 100,
        });
    }

    // --- INICIALIZAÇÃO DO CARROSSEL DE SERVIÇOS (SWIPER.JS) ---
    const servicesCarousel = document.querySelector('.services-carousel');
    if (servicesCarousel && typeof Swiper !== 'undefined') {
        new Swiper(servicesCarousel, {
            loop: true,
            autoplay: {
                delay: 3000,
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