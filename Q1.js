// Elabore uma função que recebe um array com vários números e que retorne um array contendo o maior
// o menor e a média dos número.

function estatistica(array){
    let menor = array[0];
    let maior = array[0];
    let sum = 0;
    let media = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i] < menor){
            menor = array[i];
        }
        if (array[i] > maior){
            maior = array[i];
        }
        sum += array[i];
    }

    media = sum /array.length;

    return[maior, menor, media]
}
console.log(estatistica([8, 4, 12]))
console.log(estatistica([5, 1, 9, 2, 3, 0, 1]))

