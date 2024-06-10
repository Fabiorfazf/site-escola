alert('Boas Vindas ao Jogo do número Secreto');
let numeroSecreto = 54;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 100');

//se chute for igual ao número secreto
if(chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);}
    if(chute < numeroSecreto) {
        alert('O numero é maior!');}
        if(chute > numeroSecreto) {
            alert('O número é menor');}


