/*
Palidroma

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//chiedere di inserire la parola
const nome = prompt('Inserisci una parola');

//converti la parola in stringa
let invertita = nome.split('');

let palindroma = invertita.reverse()


console.log(nome);
console.log(invertita);

if (nome == palindroma){
  console.log("La parola è palindoma")
}else{
  console.log("La parola non è palindoma")
}

/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

*/

const inserisci = prompt("è pari o dispari?")
