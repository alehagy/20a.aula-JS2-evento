let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

function atualizarSubtotal() {
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
valorSubtotal.innerText = subtotalInfo.valor;
}

atualizarSubtotal()

//---Variaveis
let btnadicionarproduto01 = document.querySelector("#btn-adicionar-produto-01")
let quantidadeproduto01 = document.querySelector("#quantidade-produto-01")

let btnsubtrairproduto01 = document.querySelector('#btn-subtrair-produto-01')
let 

//--Funcoes
function adicionarum () {
  quantidadeproduto01.value = Number(quantidadeproduto01.value) + 1
}

function diminuirum () {
  if(Number(quantidadeproduto01.value) > 0)
    quantidadeproduto01.value = Number(quantidadeproduto01.value) - 1
}

//--Eventos
btnadicionarproduto01.addEventListener('click',adicionarum)
btnsubtrairproduto01.addEventListener('click',diminuirum)
