//Criar a lista mestra
let lista = [];
let sorteados = [];

function adicionar() {
    //PEGA O NOME E ADICIONA NO ARRAY 
    let nome = document.getElementById('nome-amigo').value;

    if (nome != "") {
        lista.push(nome);
        document.getElementById('lista-amigos').textContent = lista.join(", ");
    }
    else {
        alert("Digite um nome para continuar!");
    }
    document.getElementById('nome-amigo').value = "";
}

function sortear() {
    sorteados = [];
    embaralha(lista);
    console.log(lista);
    for (let i = 0; i < lista.length; i++) {
        if ((i + 1) === lista.length) {
            sorteados.push(`${lista[i]} --> ${lista[0]}`)
        } else {
            sorteados.push(`${lista[i]} --> ${lista[i + 1]}`);  
        }
    }
    document.getElementById('lista-sorteio').innerHTML = sorteados.join('<br>')
}

function reiniciar() {
    document.getElementById('lista-amigos').textContent = "";
    document.getElementById('lista-sorteio').textContent = "";
    document.getElementById('nome-amigo').value = "";
    lista = [];
    sorteados = [];
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}