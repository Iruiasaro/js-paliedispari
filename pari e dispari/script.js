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

//sommatoria numero utente con numero Commputer
var sommatoria = insertNumber + numeroEstratto;
console.log("La somma del tuo numero + quello del Computer è " + sommatoria);

//il risultato della somma pari o dispari
function sommatoriaFinale() {
    if (sommatoria % 2 === 0) {
        return "Pari"
    } else {
        return "Dispari"
    }
}

//chi vince e chi perde?
var soluzione = sommatoriaFinale();

if (soluzione === pariDispari) {
    console.log("YOU WIN");
} else {
    console.log("YOU LOSE");
}