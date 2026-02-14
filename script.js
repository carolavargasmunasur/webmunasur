console.log("JS cargado");

document.addEventListener("DOMContentLoaded", () => {

    /// STATS ANIMACIÓN ///
    const contadores = document.querySelectorAll('.contador, .contadorsinmas');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const contador = entry.target;
            const objetivo = Number(contador.dataset.target);

            let actual = 0;
            const incremento = objetivo / 200;

            const actualizar = () => {
                actual += incremento;

                if (actual < objetivo) {
                    contador.textContent = Math.ceil(actual);
                    requestAnimationFrame(actualizar);
                } else {
                    contador.textContent = objetivo;
                }
            };

            actualizar();
            observer.unobserve(contador);
        });
    }, { threshold: 0.1 });

    contadores.forEach(contador => observer.observe(contador));

    /// MENU RESPONSIVE ///
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        const navLinks = document.querySelectorAll('nav a');

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });

        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }
});

