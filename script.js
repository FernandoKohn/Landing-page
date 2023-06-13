import Typed from 'typed.js';

var cursor = document.getElementById("cursor");

document.onmousemove = function (e) {
    cursor.style.left = (e.pageX - 1.8) + "px";
    cursor.style.top = (e.pageY - 2) + "px";
    cursor.style.display = "block";
}

var typed = new Typed(".Efeito-digitado", {
    strings: ["desenvolvo para web"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function abrirjanela() {
    if (document.querySelector(".habilidades-janela").style.display == "block") {
        document.querySelector(".habilidades-janela").style.display = "none"
    } else {
        document.querySelector(".habilidades-janela").style.display = "block"
    }

};

function fecharjanela() {
    document.querySelector(".habilidades-janela").style.display = "none"
};
