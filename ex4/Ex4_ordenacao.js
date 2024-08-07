const promptSync = require('prompt-sync')();

let numeros = [];
let adicionar = null;
while(true){
    adicionar = promptSync('Adicione um número à lista ou digite "quit" para sair e vê-la ');
    if(adicionar !== "quit"){
        adicionar = parseInt(adicionar);
    }
    numeros.push(adicionar);
    if (adicionar === "quit"){
        numeros.pop(-1);
        break
    }
}
console.log("Sua lista:", numeros);