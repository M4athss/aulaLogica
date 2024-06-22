//Buscar a quantidade de ingresso disponivel.
let pista = document.getElementById('qtd-pista');
let cadeiraSuperior = document.getElementById('qtd-superior');
let cadeiraInferior = document.getElementById('qtd-inferior');

function comprar() {
    //Buscar o tipo e a quantidade de ingresso e subtrai
    let qtd = parseInt(document.getElementById('qtd').value);
    let tipo = document.getElementById('tipo-ingresso');

    if (qtd > 0) {
        switch (tipo.value) {
            case 'pista':
                if (qtd < pista.textContent) {
                    alert('Compra realizada com sucesso!');
                    pista.textContent -= qtd;
                    break;
                }
                else if (qtd > pista.textContent) {
                    alert(`A quantidade indisponivel para compra, saldo de ${pista.textContent} ingressos.`);
                    break;
                } else {
                    break;
                }
            case 'inferior':
                if (qtd <= cadeiraInferior.textContent) {
                    alert('Compra realizada com sucesso!');
                    cadeiraInferior.textContent -= qtd;
                    break;
                }
                else if (qtd > cadeiraInferior.textContent) {
                    alert(`A quantidade indisponivel para compra, saldo de ${cadeiraInferior.textContent} ingressos.`);
                    break;
                } else {
                    break;
                }
            case 'superior':
                if (qtd <= cadeiraSuperior.textContent) {
                    alert('Compra realizada com sucesso!');
                    cadeiraSuperior.textContent -= qtd;
                    break;
                }
                else if (qtd > cadeiraSuperior.textContent) {
                    alert(`A quantidade indisponivel para compra, saldo de ${cadeiraSuperior.textContent} ingressos.`);
                    break;
                } else {
                    break;
                }
            default:
                alert('Nenhum tipo definido.')
        }
    }
    else {
        alert('A quantidade ingressos deve ser maior que zero');
    }

    document.getElementById('qtd').value = "";
    console.log(qtd)

}