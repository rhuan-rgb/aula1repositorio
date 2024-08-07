const promptSync = require('prompt-sync')();

let notas = [];
let total = null;
while(true){
    total = parseInt(promptSync("Digite a quantidade total de notas para realizar a média: "));
    for(let i = 0; i < total; i++){
        notas[i] = parseFloat(promptSync("Digite uma nota: "));
    }
    const validacao = notas.every(num => num >= 0 && num <= 10);
    if (validacao){
        break
    }
    else{
        console.log("Alguma nota está fora do conjunto 0-10. Tente novamente.")
    }
}
let media = null;
notas.forEach(element => {
    media += element;
});
media /= total;
console.log("média =", media);