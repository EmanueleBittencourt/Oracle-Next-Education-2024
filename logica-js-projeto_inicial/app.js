alert('Boas vindas ao jogo do número secreto');

let min = 1;
let max = 30;
let numeroSecreto = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(numeroSecreto);

//let numeroSecreto = 5;
let numeroDigitado = prompt('Escolha um número entre  1 e 30');

if(numeroSecreto == numeroDigitado){
    alert('Você descobriu o número secreto ' + numeroSecreto)
}

else{
    alert('Você errou! :(')
}
