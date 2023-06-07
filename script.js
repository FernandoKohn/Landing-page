
var cursor = document.getElementById("cursor")

document.onmousemove = function (e) {
    cursor.style.left = (e.pageX + 1.5) + "px";
    cursor.style.top = (e.pageY + 1.5) + "px";
    cursor.style.display = "block";
}

var typed = new Typed(".Efeito-digitado", {
    strings: ["desenvolvo para web"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})