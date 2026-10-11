const btnTheme = document.querySelector('#btn_cambio');
const body = document.body;

btnTheme.addEventListener('click', () => {
    body.classList.toggle('modo_oscuro');
    if (body.classList.contains('modo_oscuro')) {
        btnTheme.textContent = 'Modo Claro';
        
    } else {
        btnTheme.textContent = 'Modo Oscuro';
    }
    console.log('Modo oscuro activado:', body.classList.contains('modo_oscuro'));
});

//aqui agregamos lo del boton2
const btnTheme2 = document.querySelector('#btn_cambio2');
//const body = document.body;

const padre = document.getElementById('div_padre');

btnTheme2.addEventListener('click', () => {
    padre.classList.toggle('modo_transparente');

    if (padre.classList.contains('modo_transparente')) {
        btnTheme2.textContent = 'OPACO (:';
        
    } else {
        btnTheme2.textContent = 'TRANSPARENTE :)';
    }
    console.log('Se aplico transparente:', padre.classList.contains('modo_transparente'));
});