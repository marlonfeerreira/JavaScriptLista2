function febre(numeros){
    let tem = [];

    for(let i = 0; i <= numeros.length; i++){
        if(numeros[i]>= 41){
            
            tem[i] = ("Hipertermia");
        }else if(numeros[i] >= 39.6 && numeros[i] < 41){
            tem[i] = ("Febre Alta");
        }else if(numeros[i]>= 37.8 && numeros[i] < 39.6){
            tem[i] = ("Febre");
        }else if (numeros[i] >= 35.1 && numeros[i] < 37.8){
            tem[i] = ("Normal");
        }else if(numeros[i] <= 35){
            tem[i] = ("Hipotermia");
        }
    }
    return tem; 
}
console.log(febre([35.41, 33.12, 41.06, 38.9, 40.22]));




