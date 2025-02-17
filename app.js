function sortear(){
    let quantidade = document.getElementById("quantidade").value;
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    let numero;
    alert(numero);

    let sorteados = [];

    for (let i = 0; i < quantidade; i++) {
        numero = numeroAleatorio(de, ate);
        sorteados.push(numero);

        alert(sorteados);
    }
    let resultado = document.getElementById('resultado');
}

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
