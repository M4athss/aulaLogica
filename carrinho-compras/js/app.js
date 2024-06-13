let attValor = document.getElementById('valor-total');
let valorTotal = 0
let carrinho = document.getElementById('lista-produtos');

function adicionar() {

    //Extrai a descricao do item
    let produtoSelecionado = document.getElementById('produto');
    let indiceProduto = produtoSelecionado.selectedIndex;
    let textoProduto = produtoSelecionado.options[indiceProduto].text;

    //SEPARA O MATERIAL DO VALOR
    let parte = textoProduto.split(' - ');
    let valor = parte[1].match(/\d+/)[0];

    //Cria uma nova secao e adiciona a tag spam
    let quantidade = document.getElementById('quantidade').value;
    let novoProduto = document.createElement('section');
    let totalItem = quantidade * valor;

    if (quantidade > 0 && quantidade <= 100) {
        novoProduto.className = 'carrinho__produtos__produto';
        novoProduto.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${parte[0]} <span class="texto-azul">${totalItem}</span>`;
        carrinho.appendChild(novoProduto);

        valorTotal += totalItem
        attValor.textContent = `R$${valorTotal}`
        console.log(parte[0]);
        console.log(valor);
        console.log(totalItem);
    } else if (quantidade > 100) {
        alert('Limite maximo de 100 unidades');
    } else {
        alert('Quantidade do item nao pode ser 0');
    }

}

function limpar() {
    carrinho.innerHTML = '';
    valorTotal = 0;
    quantidade.value = '';
    attValor.textContent = `R$${valorTotal}`;
}