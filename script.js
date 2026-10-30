const elementos = ["🌼", "🌻", "🏵️"];

function crearElemento() {
    const flor = document.createElement("div");

    flor.classList.add("flor");
    flor.textContent =
        elementos[Math.floor(Math.random() * elementos.length)];

    flor.style.left = Math.random() * 100 + "vw";

    flor.style.fontSize =
        (15 + Math.random() * 20) + "px";

    const duracion = 7 + Math.random() * 5;

    flor.style.animationDuration = duracion + "s";

    document.body.appendChild(flor);

    setTimeout(() => {
        flor.remove();
    }, duracion * 1000);
}

// Crear flores cada cierto tiempo
setInterval(crearElemento, 900);

console.log("🌼 Página del Día de Muertos funcionando");
