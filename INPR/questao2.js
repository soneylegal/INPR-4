//  16 colheres de café é igual a uma xícara. Escreva uma função que converta colheres em xícaras. Deve tomar como argumento o número de colheres de café e retornar o número de xícaras.

const prompt = require('prompt-sync')();

let colheres = Number(prompt("Colheres: "))

function colheresParaXicaras(colheres) {
    let xicaras = colheres / 16
    return xicaras
  }
console.log(`${colheres} colher(es) equivalem a ${colheresParaXicaras(colheres)} xícara(s).`)
