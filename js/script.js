// Descrizione
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50

// Funzione che dato un array ed un elemnto , ritorna true se l'elemento è presente nell'array altrimenti ritorna false
function inArray(array, elemento) {
  var trovato = false;
  var i = 0;
  while(i < array.length && trovato == false ){
    if(array[i] == elemento ){
      trovato = true;
    }
    i++
  }
  return trovato;
}

// Funzione che genera un numero random in un range(min , max)
function generaNumRandom(min, max) {
  var num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}


// 1) Genero 16 numeri casuali in un range da 1 a 100 e li salvo in un array. In questi 16 numeri non ci devono essere duplicati
var listaBombe = [];

while(listaBombe.length < 16){
  var numCasuale = generaNumRandom(1, 100);

  if (inArray(listaBombe, numCasuale) == false) {
    listaBombe.push(numCasuale);
  }
}
console.log(listaBombe);

// 2) L'utente inserisce 84 numeri (da 1 a 100), se il numero è nella lista, l'utente perde altrimenti avanza con l'inserimento degli altri numeri
var numeriInseriti = [];
var bombaEsplosa = false;

while (numeriInseriti.length < 84 && bombaEsplosa == false){
  var numUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));

  if(isNaN(numUtente) || numUtente > 100 || numUtente <1){
    alert("DEVI INSERIRE UN NUMERO DA 1 A 100!!!")
  } else if(inArray(numeriInseriti,numUtente) == false){
    // Se il numero è presente tra i numeri generati precedentemente , il gioco termina
    if(inArray(listaBombe,numUtente) == true){
      bombaEsplosa = true;
    } else {
      numeriInseriti.push(numUtente);
    }
  }
}
// 3) Stampa il livello in cui l'utente è arrivato
if(bombaEsplosa == true){
  alert("Hai perso. Livello raggiunto :" + " " + numeriInseriti.length);
} else {
  alert("Hai vinto!");
}
