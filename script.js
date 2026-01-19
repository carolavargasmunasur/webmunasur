console.log("JS cargado");

document.addEventListener("DOMContentLoaded", () => {
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
});

