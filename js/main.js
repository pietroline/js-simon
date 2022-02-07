//random(max, min) ritorna un numero casuale compreso tra il max e il min inclusi
function random(max, min){
    return Math.floor(Math.random() * (max - min + 1) + min);
}






//--------------------------------------------------------------------------------------------------------------------------------------------------



//creo un array di elementi casuali
const numeri = [];
for(let i=0; i<5; i++){
    numeri[i] = random(0,99);
}

console.log("numeri casuali: "+numeri)


//append dell'arrray numeri sul DOM
let element = document.getElementById("numeri");
element.innerHTML = numeri;



//timer 30 secondi
setTimeout(function(){

    //nascondo i numeri da ricordare
    element.classList.add("hidden");

    //prelevo i numeri ricordati dall'utente
    let numeriRicordati = [];
    let numeriCorretti =[];
    for(let i=0; i<5; i++){

        numeriRicordati[i] = prompt(`Inserisci il ${i+1}° numero che ricordi`);
        if(numeri.includes(numeriRicordati[i])){
            numeriCorretti.push(numeriRicordati[i]);
        }
    }

    console.log("Numeri ricordati: " + numeriRicordati);
    console.log("Numeri corretti: " + numeriCorretti);


}, 2000);


    