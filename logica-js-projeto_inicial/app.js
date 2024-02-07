//opção alternativa para gerar um número aleatório
/*let min = 1;
let max = 10;
let numeroSecreto = Math.floor(Math.random() * (max - min + 1)) + min; */
let valorMaximo = 100;
let numeroSecreto = parseInt(Math.random() * valorMaximo + 1);
console.log(numeroSecreto);
let tentativas = 1;
let numeroDigitado;

while(numeroDigitado != numeroSecreto){
    numeroDigitado = prompt('Escolha um número entre  1 e ' + valorMaximo);
    if(numeroDigitado == numeroSecreto){
        break;
    }
    else{
        if(numeroDigitado > numeroSecreto){
            alert('O número secreto é menor que ' + numeroDigitado);
        }
        else{
            alert('O número secreto é maior que ' + numeroDigitado);
        }
    }
    tentativas++

}

let palavraTentativa = tentativas > 1 ? 'tentativas.' : 'tentativa.';
alert('Você descobriu o número secreto ' + numeroSecreto + ' com ' + tentativas + ' ' + palavraTentativa);
