// Converta km em m. Por exemplo, escreva uma função que converta quilômetros em metros. Existem 1.000 metros em 1 quilômetro
const prompt = require("prompt-sync")();

let km = Number(prompt("Quilometros: "))

function kmParaMetros(km) {
    let metros = km * 1000
    return metros
  }
console.log(`${km} quilometro(s) equivalem a ${kmParaMetros(km)} metro(s).`)