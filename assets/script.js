const vagas = document.querySelector('.vagas');
function adicionaVagas(n){
    for(let i = 1; i < n + 1; i++){
        let div = document.createElement('div');
        div = `<div class="vaga vaga${i}" onclick="adiciona(${i})"><p>${i}</p></div>`
        vagas.innerHTML +=div
    }
}

adicionaVagas(24);
function adiciona(n){
    const vaga = '.vaga' + n
    const vagaParaAdicionar = document.querySelector(vaga);
    

    
    
    vagaParaAdicionar.innerHTML = carro(carroAleatorio());
}


function carroAleatorio(){
    let  sorteio = Math.floor(Math.random() * (10) - 3);
    if(sorteio < 1){
        sorteio = 1
    }
    if(sorteio > 6){
        sorteio = 6
    }
    return sorteio
}
function carro(n){
    if(n == 1){
        return `<img src="img/carro1.webp" width="100" alt="">`
    } else if(n == 2){
        return `<img src="img/carro2.png" width="100" alt="">`
    } else if(n == 3){
        return `<img src="img/carro3.png" width="100" alt="">`
    } else if(n == 4){
        return `<img src="img/carro4.png" width="100" alt="">`
    } else if(n == 5){
        return `<img src="img/carro5.png" width="100" alt="">`
    } else if(n == 6){
        return `<img src="img/carro6.png" width="100" alt="">`
    }
}
