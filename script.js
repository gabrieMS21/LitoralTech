
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
