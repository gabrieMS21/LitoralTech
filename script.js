
        document.addEventListener('DOMContentLoaded', function() {
            // Efeito do header ao rolar
            const header = document.querySelector('header');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // Animação dos itens ao aparecer na tela
            const animatedItems = document.querySelectorAll('.animated-item');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            animatedItems.forEach(item => {
                observer.observe(item);
            });
        });
// Espera o documento carregar para executar o script
document.addEventListener('DOMContentLoaded', function() {
    
    // Animações de Scroll (código que você já tinha)
    const animatedItems = document.querySelectorAll('.animated-item');
    if (animatedItems.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        animatedItems.forEach(item => {
            observer.observe(item);
        });
    }

    // Inicialização do Carrossel de Serviços com Swiper.js
    const servicesCarousel = document.querySelector('.services-carousel');
    if (servicesCarousel) {
        new Swiper(servicesCarousel, {
            // Opções do Swiper
            loop: true, // Cria um loop infinito de slides
            autoplay: {
                delay: 4000, // Tempo em milissegundos para mudar de slide
                disableOnInteraction: false, // Não para o autoplay ao interagir
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true, // Permite clicar nas bolinhas para navegar
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // Responsividade: define quantos slides mostrar em cada tamanho de tela
            slidesPerView: 1,
            spaceBetween: 20,
            breakpoints: {
                // quando a largura da tela for >= 640px
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                // quando a largura da tela for >= 992px
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                 // quando a largura da tela for >= 1200px
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                }
            }
        });
    }

});