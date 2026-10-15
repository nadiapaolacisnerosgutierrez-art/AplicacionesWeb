const botonMensaje = document.getElementById("boton-mensaje");
const mensaje = document.getElementById("mensaje");

botonMensaje.addEventListener("click", function () {
    const fraseVisible = mensaje.classList.toggle("visible");
    botonMensaje.textContent = fraseVisible ? "Ocultar frase" : "Descubre el mensaje";
});