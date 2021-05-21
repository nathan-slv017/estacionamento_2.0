const vagas = document.querySelector('.vagas');
const body = document.querySelector('body');
const carrosJaSalvos = document.querySelector('.carrosJaSalvos');

let vv;
function adicionaVagas(n) {
    for (let i = 1; i < n + 1; i++) {
        let div = document.createElement('div');
        div = `<div class="vaga vaga${i}" onclick="adiciona(${i})"><p>${i}</p></div>`;
        vagas.innerHTML += div;
    };
};

adicionaVagas(24);
function adiciona(n) {

    esperando(n);


};
function esperando(n) {
    if(document.querySelector('.formulario') || document.querySelector('.vaga' + n).classList.contains('ocupada')){
        return;
    }

    const formulario = document.createElement('div');
    formulario.classList.add('formulario');

    const div1 = document.createElement('div');

    const labelNome = document.createElement('label');
    labelNome.innerHTML = 'Carro ';
    const inputNome = document.createElement('input');
    inputNome.classList.add('nome');

    const div2 = document.createElement('div');

    const labelPlaca = document.createElement('label');
    labelPlaca.innerHTML = 'Placa ';
    const inputPlaca = document.createElement('input');
    inputPlaca.classList.add('placa');

    const btnConfirma = document.createElement('button');
    btnConfirma.classList.add('confirmar');
    btnConfirma.innerHTML = 'Confirma';
    const btnCancela = document.createElement('button');
    btnCancela.classList.add('cancelar');
    btnCancela.innerHTML = 'Cancela';


    div1.appendChild(labelNome);
    div1.appendChild(inputNome);
    div2.appendChild(labelPlaca);
    div2.appendChild(inputPlaca);
    formulario.appendChild(div1);
    formulario.appendChild(div2);
    formulario.appendChild(btnConfirma);
    formulario.appendChild(btnCancela);
    body.appendChild(formulario);

    
    vv = n;
}

document.addEventListener('click', (e) => {
    
    const nome = document.querySelector('.nome');
    const placa = document.querySelector('.placa');
    const formulario = document.querySelector('.formulario');

    if(e.target.classList.contains('confirmar')){
        if(nome.value === '' || placa.value === ''){
            return alert('informe os valores corretamente');
        }
        formulario.remove();
        carroNaVaga(vv, nome.value, placa.value);
        
    };
    if(e.target.classList.contains('cancelar')){
        formulario.remove();
    }

    
});
function carroNaVaga(n, nome, placa) {
    const vaga = '.vaga' + n
    const vagaParaAdicionar = document.querySelector(vaga);
    if (vagaParaAdicionar.classList.contains('ocupada')) {
        return 
    }

    vagaParaAdicionar.classList.add('ocupada');
    vagaParaAdicionar.innerHTML = carro(carroAleatorio());    

    const div = document.createElement('div')
    div.classList.add('dadosDoCarro');
    div.classList.add('desc' + n);
    div.innerHTML = `vaga:${n}, nome: ${nome}, plca: ${placa} <button onclick="apaga(${n})">Apagar</button>`
    carrosJaSalvos.appendChild(div);
}
function apaga(n){
    const vagaParaApagar = document.querySelector('.desc' + n);
    const vagaParaApagarNoEst = document.querySelector('.vaga' + n);
    vagaParaApagarNoEst.innerHTML = `<p>${n}</p>`;
    vagaParaApagar.remove();
    vagaParaApagarNoEst.classList.remove('ocupada');
    
}

function carroAleatorio() {
    let sorteio = Math.floor(Math.random() * 8);
    if (sorteio < 1) {
        sorteio = 1;
    }
    if (sorteio > 6) {
        sorteio = 6;
    }
    return sorteio;
}
function carro(n) {
    if (n == 1) {
        return `<img src="img/carro1.webp" width="100" alt="">`;
    } else if (n == 2) {
        return `<img src="img/carro2.png" width="100" alt="">`;
    } else if (n == 3) {
        return `<img src="img/carro3.png" width="100" alt="">`;
    } else if (n == 4) {
        return `<img src="img/carro4.png" width="100" alt="">`;
    } else if (n == 5) {
        return `<img src="img/carro5.png" width="100" alt="">`;
    } else if (n == 6) {
        return `<img src="img/carro6.png" width="100" alt="">`;
    }
}
