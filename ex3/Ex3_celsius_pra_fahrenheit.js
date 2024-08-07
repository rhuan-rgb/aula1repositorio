const promptSync = require('prompt-sync')();

let celsius = parseFloat(promptSync('Digite o valor em Celsius (sem o grau): '));

console.log("O valor",celsius+"°C","em fahrenheit é:", celsius * 9 / 5 + 32 +"°F");