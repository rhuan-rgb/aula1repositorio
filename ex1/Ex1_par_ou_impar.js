const promptSync = require("prompt-sync")();

let num = parseFloat(promptSync("Digite um número para saber se é par ou ímpar: "));
if (num % 2 === 0){
    console.log(num,"é par");
}
else{
    console.log(num,"é ímpar");
}