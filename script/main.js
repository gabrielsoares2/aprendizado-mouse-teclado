let primeiroQuadrado = document.getElementById("div1");
let segundoQuadrado = document.getElementById("div2");

function corAleatoria() {
    var letters = '0123456789ABCDEF';
    var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
    return color;
}

primeiroQuadrado.addEventListener("click", () =>{
    primeiroQuadrado.style.backgroundColor = corAleatoria();
})

segundoQuadrado.addEventListener("dblclick", () => {
    segundoQuadrado.style.backgroundColor = corAleatoria();
})

