//  1 litro de água pesa exatamente 1 quilograma. Escreva uma função que tenha um parâmetro para o volume de água em litros que retorne o peso da água , mais ou menos assim: function litrosDeAguaEmKg(litros)

const prompt = require('prompt-sync')();

let litros = Number(prompt("Litros: "))
function litrosDeAguaEmKg(litros) {
    let pesoEmKg = litros
    return pesoEmKg;
  }
  
console.log(`${litros} litro(s) de água equivalem a ${litrosDeAguaEmKg(litros)} quilo(s).`);
  

