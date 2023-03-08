/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.*/

// Variabile km da percorrere
const chilometri = prompt('Inserire il numero di chilometri da percorrere');
console.log(chilometri);

// Variabile età del passeggero
const etaPasseggero = prompt('Inseriee la età del passeggero');
console.log(etaPasseggero);

var prezzoTotale;

var prezzoChilometro = 0.21;

var scontoMinori = 0.20;

var scontoOver65 = 0.40;


if (chilometri && etaPasseggero && !isNaN(etaPasseggero) && etaPasseggero <= 100) {
    if (etaPasseggero < 18) {

        prezzoChilometro = prezzoChilometro * chilometri;
        prezzoTotale = prezzoChilometro - (prezzoChilometro * scontoMinori);
        console.log(prezzoTotale);

    } else if (etaPasseggero >= 65) {

        prezzoChilometro = prezzoChilometro * chilometri;
        prezzoTotale = prezzoChilometro - (prezzoChilometro * scontoOver65);
        console.log(prezzoTotale);

    } else {

        prezzoChilometro = prezzoChilometro * chilometri;
        prezzoTotale = prezzoChilometro;
        console.log(prezzoTotale);
    }
} else{

    
}