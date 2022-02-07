//random(max, min) ritorna un numero casuale compreso tra il max e il min inclusi
function random(max, min){
    return Math.floor(Math.random() * (max - min + 1) + min);
}


//creo un array di elementi casuali
const numeri = [];
for(let i=0; i<5; i++){
    numeri[i] = random(0,99);
}

