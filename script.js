document.addEventListener("DOMContentLoaded", function() {
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
    
    // --- HEADER COM SCROLL ---
    const header = document.querySelector('header');
    if(header) {
        const updateHeader = () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        };
        
        window.addEventListener('scroll', updateHeader);
        updateHeader(); // Verificar posição inicial
    }

    // --- ANIMAÇÃO DE SCROLL (FADE-IN + SLIDE-UP) ---
    const animatedItems = document.querySelectorAll('.animated-item');
    
    if (animatedItems.length > 0) {
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {  // Corrigido typo "isIntersecting"
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        };
        
        const observerOptions = { 
            root: null, 
            threshold: 0.1 
        };
        
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        animatedItems.forEach(item => {
            observer.observe(item);
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