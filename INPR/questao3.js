// Escreva uma função que converta quilogramas em libras. Use a taxa de conversão de 2,2 libras para cada quilograma.
const prompt = require('prompt-sync')();

let quilogramas = Number(prompt("Quilogramas: "))

function quilogramasParaLibras(quilogramas) {
    let libras = quilogramas * 2.2
    return libras
}
  
console.log(`${quilogramas} quilograma(s) equivale a ${quilogramasParaLibras(quilogramas)} libra(s).`)
