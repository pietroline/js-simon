//random(min,max) ritorna un numero casuale compreso tra il max e il min inclusi 
function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}






//--------------------------------------------------------------------------------------------------------------------------------------------------






document.getElementById("start").addEventListener("click",

    function(){

        //prelevo ed elaboro informazione sulla difficoltà impostata
        let livello = document.getElementById("livello");

        let numeroNumeri;
        switch (livello.value){
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


        //inizia il gioco, visualizzo i numeri da ricordare e rimuovo la possibilità di iniziare un nuovo gioco 
        document.getElementById("memorizza").classList.remove("hidden");
        document.getElementById("settings").classList.add("hidden");
        document.getElementById("memorizzati").classList.add("hidden"); //necessario se iniziamo una nuova partita. Non vogliamo visualizzare il risultato precedente 

    

        
        //creo un array di elementi casuali, i quali non si ripetono all'interno dell'array
        const numeri = [];
        while(numeri.length < numeroNumeri){
            let casuale = random(0,99); 
            if(!numeri.includes(casuale)){
                numeri.push(casuale);
            }
        };
        console.log("numeri casuali: " + numeri);


        //append dell'arrray numeri sul DOM
        let element = document.getElementById("numeri");
        element.innerHTML = numeri;


        //timer 30 secondi
        setTimeout(() => {

            //nascondo i numeri da ricordare
            document.getElementById("memorizza").classList.add("hidden");

            setTimeout(() => {

               //prelevo i numeri ricordati dall'utente
                const numeriRicordati = [];
                const numeriCorretti =[];
                for(let i=0; i<numeroNumeri; i++){
                
                    numeriRicordati[i] = parseInt(prompt(`Inserisci il ${i+1}° numero che ricordi \n ATTENZIONE: sono accettati solo numeri da 2 cifre, qualsiasi altro valore sarà considerato come sbagliato`));
                    if(numeri.includes(numeriRicordati[i])){
                        numeriCorretti.push(numeriRicordati[i]);
                    }

                }

                console.log("Numeri ricordati: " + numeriRicordati);
                console.log("Numeri corretti: " + numeriCorretti);


                //visualizzo il risultato
                document.getElementById("memorizzati").classList.remove("hidden");
                document.getElementById("risultato").innerHTML = `Hai memorizzato correttamente ${numeriCorretti.length} numeri su ${numeroNumeri}`;
                document.getElementById("numeriRicordati").innerHTML = "Ecco quali numeri hai ricordato: " + numeriCorretti;   

                //rivisualizzo le impostazioni per iniziare un nuovo gioco
                document.getElementById("settings").classList.remove("hidden");


            },250); 


        }, 2000);
    }

);




