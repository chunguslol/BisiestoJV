// presenter.js
import esBisiesto from "./Bisiesto.js";

const form = document.querySelector("#esBisiesto-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    div.innerHTML = "";

    const anioIngresado = parseInt(document.querySelector("#anio").value, 10);

    if (!isNaN(anioIngresado)) {
        const resultado = esBisiesto(anioIngresado);

        // Mostrar mensaje específico
        if (resultado) {
            div.innerHTML = "<p>Sí es bisiesto.</p>";
        } else {
            div.innerHTML = "<p>No es bisiesto.</p>";
        }
    } else {
        console.error("Por favor, ingrese un año válido.");
    }
});

