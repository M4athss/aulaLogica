 let jogosAlugados = [];

    function alterarStatus(id){
        let game = document.getElementById(`game-${id}`);
        let nomeJogo = game.querySelector('.dashboard__item__name');
        let botaoJogo = game.querySelector('.dashboard__item__button');
        let imgJogo = game.querySelector('.dashboard__item__img');

        alugar(botaoJogo, imgJogo, nomeJogo);
    }

    function alugar(botao, img, nome){
        if(botao.classList.contains('dashboard__item__button--return')){
            botao.classList.remove('dashboard__item__button--return');
            img.classList.remove('dashboard__item__img--rented');
            botao.textContent = 'Alugar'; 

            // Remover o jogo alugado da lista
            let index = jogosAlugados.indexOf(nome.textContent);
            if (index !== -1) {
                jogosAlugados.splice(index, 1);
            }
        } else {
            botao.classList.add('dashboard__item__button--return');
            img.classList.add('dashboard__item__img--rented');
            botao.textContent = 'Devolver';

            // Adicionar o jogo alugado à listas
            jogosAlugados.push(nome.textContent);
        }

        console.log("Jogos alugados:", jogosAlugados);
    }