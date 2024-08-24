let alvo = document.getElementById("alvo");
let areaDoAlvo = document.getElementById("area_jogo");
let points = 0

function posicionarAlvo(){

    let areaLargura = areaDoAlvo.clientWidth;
    let areaAltura = areaDoAlvo.clientHeight;
    let alvoLargura = alvo.clientWidth;
    let alvoAltura = alvo.clientHeight;

    let x = Math.random() * (areaLargura - alvoLargura);
    let y = Math.random() * (areaAltura - alvoAltura);

    alvo.style.left = `${x}px`;
    alvo.style.top = `${y}px`;
}

document.addEventListener("DOMContentLoaded", function(){

    posicionarAlvo();

    setInterval(posicionarAlvo, 2000);

});

function acertou(){

    let pontuacao = document.getElementById("pontos");

    points += 1;

    pontuacao.innerHTML = points;

    posicionarAlvo();

}