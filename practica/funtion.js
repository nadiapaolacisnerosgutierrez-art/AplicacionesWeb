let boton = document.querySelector("#btn_cambio");
let divs = document.querySelectorAll(".NPCG");

boton.addEventListener("click", () => {

    divs.forEach((div) => {
        div.classList.toggle("cambio_color");
    });

});