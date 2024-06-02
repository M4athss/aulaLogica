function sortear(){
    let qtd = parseInt(document.getElementById('quantidade').value);
    let inicia = parseInt(document.getElementById('de').value);
    let termina = parseInt(document.getElementById('ate').value);

    if (inicia >= termina) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
      }

    let sorteados = [];
    let numero;
    
    if (qtd > (termina-inicia)){
        alert('Quantidade numeros gerados menor que a de numeros solicitados');
        return;
    }

    for (let i=0; i < qtd; i++){
        numero = obterNumeroAleatorio(inicia, termina);
        while(sorteados.includes(numero)){
            numero = obterNumeroAleatorio(inicia, termina);
        }        
        sorteados.push(numero);
    }
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;

    alterarBotao();
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function alterarBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');    
    } 

}

function desativaBotao(){
    let botao = document.getElementById('btn-reiniciar');
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';

    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum ate agora.</label>`;

    desativaBotao();
}