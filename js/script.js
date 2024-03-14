var inicializador = document.querySelector(".inicializador")
var inicializadorConteudo = document.querySelector(".incializador-conteudo")
var inicializadorChecker = document.querySelector(".inicializador-checker")
var corpo = document.querySelector("main")
var tamanhoTela = screen.width

function Inicializador() {
    inicializador.style.display = "flex"
    corpo.style.display = "none"
    if (tamanhoTela < 510) {
        setTimeout(() => {
            inicializadorChecker.style.animation = "zoomOf2  0.5s ease forwards"
            inicializadorConteudo.style.display = "block"

        }, 4000)
        setTimeout(() => {
            corpo.style.display = "flex"
            inicializador.style.animation = "fadeOut 0.5s ease forwards"
        }, 7500)


    } else {
        setTimeout(() => {
            corpo.style.display = "flex"
            inicializador.style.animation = "fadeOut 1s ease forwards"
        }, 4000)
    }
}

// Inicializador()

const inputEle = document.getElementById('plc');

function congratulations() {
    if (document.querySelector("#plc").value == "skywars.net") {
        document.querySelector(".Mine_dos_bons_tempos").style.display = "flex"
        document.querySelector("main").style.display = "none"
    }
}

inputEle.addEventListener('keyup', function (e) {
    var key = e.which || e.keyCode;
    if (key == 13) {
        congratulations()
    }
});


function voltar() {
    document.querySelector(".Mine_dos_bons_tempos").style.display = "none"
    document.querySelector("main").style.display = "flex"
}

//Diretório padrão de incialização

window.location.hash = 'index';

// Dark Mode

var darkmode = document.getElementById("dark-mode")
darkmode.addEventListener("click", () => {
    document.querySelectorAll("#index, #dark-mode, #conteudo-total, .Conteudo-Index, body, .menu-fixo, .box-lateral a, .fk, .navbar, .navlink1, .navlink2, .navlink3, .navlink4, .navlink5, .navlink6, .navlink7, .ola-wrap-h6, .fernandokohn, .fernandokohn2, .efeito-wrap-h2, .Efeito-digitado, .Conteudo-Index-h4-1, .Conteudo-Index-h4-2, .mais-sobre-mim, #mais-sobre-mim2, .mais-sobre-mim-h1, #mais-sobre-mim2-h1, .caixa-butao, #cx-bt2, #cx-bt-a3, #cx-bt-a4, .caixa-butao-a1, .caixa-butao-a2, #caixao-botao-dark1, #caixao-botao-dark2, .sobre, .Botao-sobre, .janela-sobre, .janela-sobre-header, .conteudo-janela-sobre, .titulo1, .titulo2, .titulo3, .titulo4, .sobre-descricao1, .sobre-descricao2, .sobre-descricao3, .sobre-descricao4, .header-wrap1, .header-wrap2, .header-wrap3, #botao-fechar, #projetos, #projetos-titulo, .projetos-container, .projeto-header1, .projeto-header2, .projeto-header3, .projeto-header4, .Botao-sobre-contato, #contato, .swiper-slide, #swipeimg, .swipeh6, .swipeh4, .swipeh2, .Efeito-digitado-2, .Efeito-digitado-3, .bola-460, .bola-texto, .bola-texto header, .bola-texto h6, .bola-texto h1, #efeito-wrap-460, .sobremim-460, .sobremim-460 a, #cx-bt-05, #cx-bt-06, .header-fk-darkmode, .contato-janela").forEach(classe => {
        classe.classList.toggle("dark")
    })
    var fotoP = document.querySelector("#fotoperfil1")
    var fotoP2 = document.querySelector("#fotoperfil2")
    if (fotoP.src.match("fotos/foto1.png") || fotoP2.src.match("fotos/foto1.png")) {
        fotoP.src = "fotos/foto2.png"
        fotoP2.src = "fotos/foto2.png"

    } else {
        fotoP.src = "fotos/foto1.png"
        fotoP2.src = "fotos/foto1.png"
    }
})


//Bola que segue o mouse

const ball = document.querySelector("#cursor");

let mouseX = 0;
let mouseY = 0;

let ballX = 0;
let ballY = 0;

let speed = 0.032;


function animate() {

    let distX = mouseX - ballX;
    let distY = mouseY - ballY;


    ballX = ballX + (distX * speed);
    ballY = ballY + (distY * speed);

    ball.style.left = ballX + "px";
    ball.style.top = ballY + "px";

    requestAnimationFrame(animate);
}

animate();

document.addEventListener("mousemove", function (event) {
    mouseX = event.pageX;
    mouseY = event.pageY;
})

//Biblioteca typed.js
var typed = new Typed(".Efeito-digitado", {
    strings: ["desenvolvo para web :"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

var typed2 = new Typed(".Efeito-digitado-2", {
    strings: ["desenvolvo para web :"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

var typed2 = new Typed(".Efeito-digitado-3", {
    strings: ["desenvolvo para web :"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

var typed2 = new Typed(".Efeito-digitado-4", {
    strings: ["Botando tudo no lugar", "Limpando a bagunça", "Pesquisando como centralizar divs"],
    typeSpeed: 60,
    backSpeed: 100,
    backDelay: 1000,
    shuffle: true,
    smartBackspace: false,
    loop: true
});

var typed2 = new Typed(".Efeito-digitado-5", {
    strings: [". . . "],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    cursorChar: '',
    loop: true
});

//Todas funções nomeadas de "Abrir" alteram o display ou Visibility do target

function abrirjanela() {
    document.querySelector(".habilidades-janela").style.display = "block"
    document.querySelector("#cpu-numero").style.display = "block"
    document.querySelector("#status").style.display = "block"
    document.querySelector("#aplicativo").style.display = "flex"
};

function abrirjanela2() {
    document.querySelector(".habilidades-janela2").style.display = "block"
    document.querySelector("#status").style.display = "block"
    document.querySelector("#aplicativo2").style.display = "flex"
    document.querySelector("#cpu-numero2").style.display = "block"
}

function fecharjanela() {
    document.querySelector(".habilidades-janela").style.display = "none"
    document.querySelector("#cpu-numero").style.display = "none"
    document.querySelector("#status").style.display = "none"
    document.querySelector("#aplicativo").style.display = "none"
};

function fecharjanela2() {
    document.querySelector(".habilidades-janela2").style.display = "none"
    document.querySelector("#status").style.display = "none"
    document.querySelector("#aplicativo2").style.display = "none"
    document.querySelector("#cpu-numero2").style.display = "none"
}

//Relógio em tempo real do skills.desktop

function displayClock() {
    var display = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    var hora = document.getElementById("relogio");
    var data = document.getElementById("data");
    hora.innerHTML = display;
    var date = new Date();
    let options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    data.innerHTML = date.toLocaleDateString("pt-BR", options);
    setTimeout(displayClock, 1000);
}

var windowContent = document.querySelector(".habilidades-conteudo");
var windowHeader = document.querySelector(".habilidades-janela-header");
var littleWindow = document.querySelector(".habilidades-janela");
var offsetX, offsetY;

var move = (e) => {
    littleWindow.style.left = `${e.clientX - offsetX}px`;
    littleWindow.style.top = `${e.clientY - offsetY}px`;

    if (littleWindow.offsetLeft < 0) littleWindow.style.left = "0px";

    if (littleWindow.offsetTop < 0) littleWindow.style.top = "0px";

    if ((littleWindow.offsetLeft + littleWindow.getBoundingClientRect().width) > windowContent.getBoundingClientRect().width) littleWindow.style.left = `${(windowContent.getBoundingClientRect().width - littleWindow.getBoundingClientRect().width)}px`;

    if ((littleWindow.offsetTop + littleWindow.getBoundingClientRect().height) > (windowContent.getBoundingClientRect().height + windowHeader.getBoundingClientRect().height)) littleWindow.style.top = `${(windowContent.getBoundingClientRect().height + windowHeader.getBoundingClientRect().height - littleWindow.getBoundingClientRect().height)}px`;
}


littleWindow.addEventListener("mousedown", (e) => {
    offsetX = e.clientX - littleWindow.offsetLeft;
    offsetY = e.clientY - littleWindow.offsetTop;
    document.addEventListener("mousemove", move);
});

document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", move);
});

// Movimento da janela email dentro do contato-conteudo atrelada aos limites do pai (Codigo reutilizado)

var windowContent2 = document.querySelector(".contato-conteudo");
var windowHeader2 = document.querySelector(".abaemail-header-wrap");
var littleWindow2 = document.querySelector(".abaemail");
var offsetX2, offsetY2;

var moveDois = (e) => {
    littleWindow2.style.left = `${e.clientX - offsetX2}px`;
    littleWindow2.style.top = `${e.clientY - offsetY2}px`;

    if (littleWindow2.offsetLeft < 0) littleWindow2.style.left = "0px";

    if (littleWindow2.offsetTop < 0) littleWindow2.style.top = "0px";

    if ((littleWindow2.offsetLeft + littleWindow2.getBoundingClientRect().width) > windowContent2.getBoundingClientRect().width) littleWindow2.style.left = `${(windowContent2.getBoundingClientRect().width - littleWindow2.getBoundingClientRect().width)}px`;

    if ((littleWindow2.offsetTop + littleWindow2.getBoundingClientRect().height) > (windowContent2.getBoundingClientRect().height + windowHeader.getBoundingClientRect().height)) littleWindow2.style.top = `${(windowContent2.getBoundingClientRect().height + windowHeader.getBoundingClientRect().height - littleWindow2.getBoundingClientRect().height)}px`;
}


littleWindow2.addEventListener("mousedown", (e) => {
    offsetX2 = e.clientX - littleWindow2.offsetLeft;
    offsetY2 = e.clientY - littleWindow2.offsetTop;
    document.addEventListener("mousemove", moveDois);
});

document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", moveDois);
});

var windowContent3 = document.querySelector(".habilidades-conteudo");
var windowHeader3 = document.querySelector(".habilidades-janela-header2");
var littleWindow3 = document.querySelector(".habilidades-janela2");
var offsetX, offsetY;

var moveTres = (e) => {
    littleWindow3.style.left = `${e.clientX - offsetX}px`;
    littleWindow3.style.top = `${e.clientY - offsetY}px`;

    if (littleWindow3.offsetLeft < 0) littleWindow3.style.left = "0px";

    if (littleWindow3.offsetTop < 0) littleWindow3.style.top = "0px";

    if ((littleWindow3.offsetLeft + littleWindow3.getBoundingClientRect().width) > windowContent3.getBoundingClientRect().width) littleWindow3.style.left = `${(windowContent3.getBoundingClientRect().width - littleWindow3.getBoundingClientRect().width)}px`;

    if ((littleWindow3.offsetTop + littleWindow3.getBoundingClientRect().height) > (windowContent3.getBoundingClientRect().height + windowHeader3.getBoundingClientRect().height)) littleWindow3.style.top = `${(windowContent3.getBoundingClientRect().height + windowHeader3.getBoundingClientRect().height - littleWindow3.getBoundingClientRect().height)}px`;
}


littleWindow3.addEventListener("mousedown", (e) => {
    offsetX = e.clientX - littleWindow3.offsetLeft;
    offsetY = e.clientY - littleWindow3.offsetTop;
    document.addEventListener("mousemove", moveTres);
});

document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", moveTres);
});


// Movimento das telas dos projetos

var janela1 = document.querySelector(".proj-1")
var janela2 = document.querySelector(".proj-2")
var janela3 = document.querySelector(".proj-3")
var janela4 = document.querySelector(".proj-4")

function moverjanela1() {
    janela1.style.zIndex = "5";
    janela2.style.zIndex = "4"
}

function moverjanela2() {
    janela2.style.zIndex = "5";
    janela3.style.zIndex = "4"

}

function moverjanela3() {
    janela3.style.zIndex = "5";
}

function moverjanela4() {
    janela1.style.zIndex = "1";
    janela2.style.zIndex = "2";
    janela3.style.zIndex = "3";
    janela4.style.zIndex = "4";
}

//

function abriremail() {
    document.querySelector(".abaemail").style.visibility = "visible"
}

function fecharjanelaemail() {
    document.querySelector(".abaemail").style.visibility = "hidden"

}

//As funções nomeadas "Copiar" copiam o HTML para o clipboard (teclado)

var text = document.getElementById("emailfernando")

function copiarlowwidth() {
    if (window.innerWidth < 670) {
        navigator.clipboard.writeText(text.innerHTML)
        window.alert("Email copiado para área de transferência")
    }
}

async function copiar() {
    await navigator.clipboard.writeText(text.innerHTML)
    document.querySelector("#copiar").style.display = "none"
    document.querySelector("#checked").style.display = "block"
}

function voltarcopiar() {
    document.querySelector("#copiar").style.display = "block"
    document.querySelector("#checked").style.display = "none"
}

//

function abririniciar() {
    if (document.querySelector("#iniciar-wrap").style.display == "block") {
        document.querySelector("#iniciar-wrap").style.display = "none"
    } else {
        document.querySelector("#iniciar-wrap").style.display = "block"
    }

    document.querySelector("#opcoes-wrap").style.display = "none"
    document.querySelector("#geren-tarefas-wrap").style.display = "none"

}

function abriropcoes() {
    if (document.querySelector("#opcoes-wrap").style.display == "flex") {
        document.querySelector("#opcoes-wrap").style.display = "none"
    } else {
        document.querySelector("#opcoes-wrap").style.display = "flex"
    }

    document.querySelector("#iniciar-wrap").style.display = "none"
    document.querySelector("#geren-tarefas-wrap").style.display = "none"
}

function abrirgerentarefas() {
    if (document.querySelector("#geren-tarefas-wrap").style.display == "block") {
        document.querySelector("#geren-tarefas-wrap").style.display = "none"
    } else {
        document.querySelector("#geren-tarefas-wrap").style.display = "block"
    }
    document.querySelector("#opcoes-wrap").style.display = "none"
    document.querySelector("#iniciar-wrap").style.display = "none"
}

//Display de numeros aleatórios e estilização baseada nisto para o Gerenciador de tarefas do Skill.desktop

setInterval(() => {
    document.querySelector("#cpu-numero").innerHTML = Math.floor(Math.random() * 100) + " %"
}, 1500)

setInterval(() => {
    document.querySelector("#cpu-numero2").innerHTML = Math.floor(Math.random() * 100) + " %"
}, 1500)

setInterval(() => {
    if (parseInt(document.querySelector("#cpu-numero").innerHTML) <= 50) {
        document.querySelector("#cpu-numero").style.backgroundColor = "#db7885"
    } else {
        document.querySelector("#cpu-numero").style.backgroundColor = "#e2203a"
    }
}, 1500);

setInterval(() => {
    if (parseInt(document.querySelector("#cpu-numero2").innerHTML) <= 50) {
        document.querySelector("#cpu-numero2").style.backgroundColor = "#db7885"
    } else {
        document.querySelector("#cpu-numero2").style.backgroundColor = "#e2203a"
    }
}, 1500);

//

function img1() {
    document.querySelector("#img1").style.borderColor = "white"
    document.querySelector("#img2").style.borderColor = "black"
    document.querySelector(".habilidades-conteudo").style.background = "url(../fotos/desktop-background-teste2.jpg)"

}

function img2() {
    document.querySelector("#img2").style.borderColor = "white"
    document.querySelector("#img1").style.borderColor = "black"
    document.querySelector(".habilidades-conteudo").style.background = "url(../fotos/estrelas2.gif)"
    document.querySelector(".habilidades-conteudo").style.backgroundSize = "cover"
    document.querySelector(".habilidades-conteudo").style.backgroundRepeat = "no-repeat"
}
document.querySelector(".h1teste").innerHTML = "Em homenagem ao meu melhor amigo Zig <br> obrigado por sempre me ajudar quando eu peciso."
// Alteração de línguas do Skill.desktop

function ptbr() {
    document.querySelector(".pasta-habilidade h1").innerHTML = "Habilidades"
    var procurar = document.getElementsByName("Procurar")[0]
    procurar.value = ""
    procurar.placeholder = "Procurar"
    document.querySelector("#janelah1").innerHTML = "Habilidades"
    document.querySelector("#aplicacoes-h1").innerHTML = "Aplicações"
    document.querySelector("#h1habilidades").innerHTML = "Habilidades"
    document.querySelector("#usuario-trocavel").innerHTML = "Usuário (Click para trocar)"
    document.querySelector(".geren-tarefas-titulo").innerHTML = "Processos"
    document.querySelector("#tabelanome").innerHTML = "Nome"
    document.querySelector("#tabelastatus").innerHTML = "Status"
    document.querySelector("#tabelacpu").innerHTML = "Cpu"
    document.querySelector("#tabelaaplicativos").innerHTML = "Apps"
    document.querySelector(".h3-habilidades").innerHTML = "Habilidades"
    document.querySelector("#status").innerHTML = "Aberto"
    document.querySelector("#h1opcoes").innerHTML = "Opções"
    document.querySelector("#papeldeparede").innerHTML = "Papel de parede"
    document.querySelector("#linguagemh1").innerHTML = "Linguagem"

    document.querySelector("#pt").style.backgroundColor = "#646464a4"
    document.querySelector("#en").style.backgroundColor = ""
    document.querySelector("#cr").style.backgroundColor = ""

}

function en() {
    document.querySelector(".pasta-habilidade h1").innerHTML = "Skills"
    var procurar = document.getElementsByName("Procurar")[0]
    procurar.value = ""
    procurar.placeholder = "Search"
    document.querySelector("#janelah1").innerHTML = "Skills"
    document.querySelector("#aplicacoes-h1").innerHTML = "Apps"
    document.querySelector("#h1habilidades").innerHTML = "Skills"
    document.querySelector("#usuario-trocavel").innerHTML = "User (Click to change)"
    document.querySelector(".geren-tarefas-titulo").innerHTML = "Processes"
    document.querySelector("#tabelanome").innerHTML = "Name"
    document.querySelector("#tabelastatus").innerHTML = "Status"
    document.querySelector("#tabelacpu").innerHTML = "Cpu"
    document.querySelector("#tabelaaplicativos").innerHTML = "Apps"
    document.querySelector(".h3-habilidades").innerHTML = "Skills"
    document.querySelector("#status").innerHTML = "Open"
    document.querySelector("#h1opcoes").innerHTML = "Options"
    document.querySelector("#papeldeparede").innerHTML = "Wallpaper"
    document.querySelector("#linguagemh1").innerHTML = "Language"

    document.querySelector("#pt").style.backgroundColor = ""
    document.querySelector("#en").style.backgroundColor = "#646464a4"
    document.querySelector("#cr").style.backgroundColor = ""
}

function cr() {
    document.querySelector(".pasta-habilidade h1").innerHTML = "기술"
    var procurar = document.getElementsByName("Procurar")[0]
    procurar.value = ""
    procurar.placeholder = "찾다"
    document.querySelector("#janelah1").innerHTML = "기술"
    document.querySelector("#aplicacoes-h1").innerHTML = "앱"
    document.querySelector("#h1habilidades").innerHTML = "기술"
    document.querySelector("#usuario-trocavel").innerHTML = "사용자 (클릭하여 변경)"
    document.querySelector(".geren-tarefas-titulo").innerHTML = "프로세스"
    document.querySelector("#tabelanome").innerHTML = "이름"
    document.querySelector("#tabelastatus").innerHTML = "상태"
    document.querySelector("#tabelacpu").innerHTML = "Cpu"
    document.querySelector("#tabelaaplicativos").innerHTML = "앱"
    document.querySelector(".h3-habilidades").innerHTML = "기술"
    document.querySelector("#status").innerHTML = "열려 있는"
    document.querySelector("#h1opcoes").innerHTML = "옵션"
    document.querySelector("#papeldeparede").innerHTML = "월러퍼"
    document.querySelector("#linguagemh1").innerHTML = "언어"

    document.querySelector("#pt").style.backgroundColor = ""
    document.querySelector("#en").style.backgroundColor = ""
    document.querySelector("#cr").style.backgroundColor = "#646464a4"
}

//

//Verificador do atual local da pagina para mudar o style do link ativo do navbar

setInterval(() => {
    document.querySelectorAll(".navlink0,.navlink1,.navlink2,.navlink3,.navlink4,.navlink5,.navlink6,.navlink7").forEach(link => {
        if (link.href != window.location.href) {
            link.removeAttribute("aria-current", "page")
        } else {
            link.setAttribute("aria-current", "page")
        }
    })
}, 200);
document.querySelector(".h1teste2").innerHTML = `"ZIIIIIIIIIG"`


function abrirhamburguer() {
    if (document.querySelector(".menu-lateral").style.display == "none") {
        document.querySelector(".menu-lateral").style.display = "flex"
    } else {
        document.querySelector(".menu-lateral").style.display = "none"
    }
}

//Inicializador do Swiper

var swiper = new Swiper(".swiper-container", {

    pagination: {
        el: ".swiper-pagination",

    },
});


document.querySelector("#formulario").addEventListener("submit", () => {
    document.querySelector("#send-form").style.animation = "zoomOf 1s ease forwards"
})


document.querySelector("#send-form").addEventListener("animationend", () => {
    document.querySelector("#send-form").style.display = "none"
    document.querySelector("#checked-form").style.display = "block"
    document.querySelector("#checked-form").style.animation = "zoomIn2 1s ease forwards"
})

function divCursorOn() {
    document.querySelector("#cursor").style.animation = "divCursorZoom 0.5s ease forwards"
}

document.querySelector("body").addEventListener("animationend", () => {
    document.querySelector("#cursor").style.animation = ""
})

const slider = document.querySelector('.projetos-container');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});

//skywars.net