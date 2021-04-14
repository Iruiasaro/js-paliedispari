// Chiedo all'utente di scegliere tra pari e dispari 
var pariDispari = prompt("Pari o Dispari?")
pariDispari = pariDispari.toLowerCase();
console.log("Hai scelto di essere " + pariDispari);

//scegliere un numero da 1 a 5
var insertNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log("Hai inserito il numero " + insertNumber);

//estrazione numero da 1 a 5
function randomNumber() {
    return Math.ceil(Math.random() * 5)
}
var numeroEstratto = randomNumber();
console.log("Il numero Random estratto è " + numeroEstratto);
