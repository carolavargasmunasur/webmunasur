console.log("JS cargado");

document.addEventListener("DOMContentLoaded", () => {
    // Contadores animados
    const contadores = document.querySelectorAll('.contador, .contadorsinmas');

    contadores.forEach(contador => {
        const objetivo = Number(contador.dataset.target);
        let actual = 0;
        const incremento = objetivo / 80;

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
    });

    // Menú hamburguesa para móviles
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un enlace
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }
});

