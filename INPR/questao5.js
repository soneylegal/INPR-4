//Escreva uma função formataMoeda(valor, simbolo)que considere um valor monetário como um número real e retorne uma string, com o símbolo da moeda no início seguido pelo valor arredondado para 2 casas decimais (usando toFixed(2) ).

const prompt = require("prompt-sync")();

let valor = parseFloat(prompt("Valor: "))
const simbolo = "R$"

function formataMoeda(valor, simbolo) {
    if (isNaN(valor)) {
      return 'Valor inválido'
    }
    let valorComSimbolo = simbolo + valor.toFixed(2)
    return valorComSimbolo
  }
console.log(formataMoeda(valor, simbolo))


