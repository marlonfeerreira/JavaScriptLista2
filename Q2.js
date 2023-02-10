
function tabuada(number){
    var linha = [];
    for(let i = 0; i < 11; i++){
        var multi =  number * i;
        linha[i] = " " + number + " x " + i + " = " + multi ;
    }
    return linha.join().substring(1,linha.join().length);
}
console.log(tabuada(7));