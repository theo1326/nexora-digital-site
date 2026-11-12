
/* =================================
   NEXORA DIGITAL
   JAVASCRIPT PRINCIPAL
================================= */

// Atualizar automaticamente o ano do rodapé

const footer = document.querySelector('.footer p');

if (footer) {
    footer.textContent =
        `© ${new Date().getFullYear()} Nexora Digital. Todos os direitos reservados.`;
}


// Animação de entrada das seções

const animatedElements = document.querySelectorAll(
    '.section, .course-card'
);

if ('IntersectionObserver' in window) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add('visible');

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.12
    });

    animatedElements.forEach((element) => {

        element.classList.add('reveal');

        observer.observe(element);

    });

}


// Efeito de navegação suave

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener('click', (event) => {

        const targetId = link.getAttribute('href');

        if (!targetId || targetId === '#') return;

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

        }

    });

});


// Pequeno efeito de movimento no botão principal

const mainButton = document.querySelector('.button-primary');

if (mainButton) {

    mainButton.addEventListener('mouseenter', () => {
        mainButton.style.transform = 'translateY(-3px)';
    });

    mainButton.addEventListener('mouseleave', () => {
        mainButton.style.transform = 'translateY(0)';
    });

}

