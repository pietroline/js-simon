//random(max, min) ritorna un numero casuale compreso tra il max e il min inclusi 
function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}






//--------------------------------------------------------------------------------------------------------------------------------------------------



//creo un array di elementi casuali
const numeri = [];
while(numeri.length < 5){
    let casuale = random(0,99); 
    if(!numeri.includes(casuale)){
        numeri.push(casuale);
    }
}


console.log("numeri casuali: "+numeri)


//append dell'arrray numeri sul DOM
let element = document.getElementById("numeri");
element.innerHTML = numeri;



//timer 30 secondi
setTimeout(function(){

    //nascondo i numeri da ricordare
    document.getElementById("memorizza").classList.add("hidden");

    //prelevo i numeri ricordati dall'utente
    let numeriRicordati = [];
    let numeriCorretti =[];
    for(let i=0; i<5; i++){
      
        numeriRicordati[i] = parseInt(prompt(`Inserisci il ${i+1}° numero che ricordi`));
        if(numeri.includes(numeriRicordati[i])){
            numeriCorretti.push(numeriRicordati[i]);
        }
        console.log(numeriRicordati[i]);
    }

    console.log("Numeri ricordati: " + numeriRicordati);
    console.log("Numeri corretti: " + numeriCorretti);

    //visualizzo il risultato
    document.getElementById("memorizzati").classList.remove("hidden");
    document.getElementById("risultato").innerHTML += `${numeriCorretti.length} numeri`;
    document.getElementById("numeriRicordati").innerHTML = numeriCorretti;    


}, 2000);


