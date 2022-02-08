//random(min,max) ritorna un numero casuale compreso tra il max e il min inclusi 
function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}







//livello(difficolta) in base alla difficoltà impostata calcola il giusto numero di numeri da ricordare
function livello(difficolta){

    let numeroNumeri;
        switch (difficolta.value){
            case "facile":
                numeroNumeri = 5;
                break;
            case "medio":
                numeroNumeri = 7;
                break;
            case "difficile":
                numeroNumeri = 9;
                break;
            default: 
                numeroNumeri = 0;
        }

        return numeroNumeri;

}

//randomAray(dimensione) ritorna un array di numeri casuali, i cui elementi, compresi tra 0 e 99, sono diversi tra loro
function randomArray(dimensione){
    const numeri = [];
    while(numeri.length < dimensione){
        let casuale = random(0,99); 
        if(!numeri.includes(casuale)){
            numeri.push(casuale);
        }
    };
    console.log("numeri casuali: " + numeri);

    return numeri;
}

//prelevaVerifica(arrayNumeri, dimensione) preleva i dati inseriti dall'utente tramite un prompt e ne verifica se contenuti in arrayNumeri
//ritorna un array contentente i numeri che l'utente ha inserito, ricordandosi correttamente
function prelevaVerifica(arrayNumeri, dimensione){

    //prelevo i numeri ricordati dall'utente e verifico se sono tra quelli da ricordare
    //in caso positivo li inserisco in un nuovo array di numeri ricordati correttamente
    const numeriRicordati = [];
    const numeriCorretti =[];
    for(let i=0; i<dimensione; i++){
    
        numeriRicordati[i] = parseInt(prompt(`Inserisci il ${i+1}° numero che ricordi \n ATTENZIONE: sono accettati solo numeri fino ad un massimo di 2 cifre, qualsiasi altro valore sarà considerato come sbagliato`));
        if(arrayNumeri.includes(numeriRicordati[i]) && !numeriCorretti.includes(numeriRicordati[i])){
            numeriCorretti.push(numeriRicordati[i]);
        }

    }

    console.log("Numeri ricordati: " + numeriRicordati);
    console.log("Numeri corretti: " + numeriCorretti);

    return numeriCorretti;
}



//30 secondi per memorizzare i numeri
const attesa = 30000; 





//--------------------------------------------------------------------------------------------------------------------------------------------------






document.getElementById("start").addEventListener("click",

    function(){

        //prelevo ed elaboro informazione sulla difficoltà impostata
        const difficolta = document.getElementById("livello");
        const numeroNumeri = livello(difficolta);


        //inizia il gioco, visualizzo i numeri da ricordare e rimuovo la possibilità di iniziare un nuovo gioco 
        document.getElementById("memorizza").classList.remove("hidden");
        document.getElementById("settings").classList.add("hidden");
        document.getElementById("memorizzati").classList.add("hidden"); //necessario quando iniziamo una nuova partita. Non vogliamo visualizzare il risultato precedente 

        
        //creo un array di elementi casuali, i quali non si ripetono all'interno dell'array
        const numeriRandom = randomArray(numeroNumeri);


        //append dell'arrray numeri sul DOM
        const element = document.getElementById("numeri");
        element.innerHTML = numeriRandom;


        //timer 30 secondi
        setTimeout(() => {
     
            //nascondo i numeri da ricordare
            document.getElementById("memorizza").classList.add("hidden");

            setTimeout(() => {
                
                let numeriCorretti = prelevaVerifica(numeriRandom, numeroNumeri);

                //visualizzo il risultato
                document.getElementById("memorizzati").classList.remove("hidden");
                document.getElementById("risultato").innerHTML = `Hai memorizzato correttamente ${numeriCorretti.length} numeri su ${numeroNumeri}`;

                if (numeriCorretti.length != 0 && numeriCorretti.length == numeroNumeri){
                    document.getElementById("numeriRicordati").innerHTML = "COMPLIMENTI HAI VINTO!!!! Ecco quali numeri hai ricordato: " + numeriCorretti;   
                }else if(numeriCorretti.length != 0 && numeriCorretti != NaN){
                    document.getElementById("numeriRicordati").innerHTML = "Ecco quali numeri hai ricordato: " + numeriCorretti;   
                }
                

                //rivisualizzo le impostazioni per iniziare un nuovo gioco
                document.getElementById("settings").classList.remove("hidden");

                
            },250); 


        }, attesa);
    }

);




