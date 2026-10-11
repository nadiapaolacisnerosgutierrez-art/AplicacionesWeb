let boton = document.querySelector("#btn_cambio");
let divs = document.querySelectorAll(".NPCG");
let titulo = document.querySelector("h1");
let parr=document.querySelectorAll(".cambio_negrita");

boton.addEventListener("click", () => {
    if (titulo.textContent === "Friends Food") {
        titulo.textContent = "Comida con amigos";
    } else {
        titulo.textContent = "Friends Food";
    }

    divs.forEach((div) => {
        div.classList.toggle("cambio_color");
    });
});