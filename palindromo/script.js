//inserire una parola 
var insertWord = prompt("Inserisci una parola e scopri se è palindroma");

//variabile di controllo
var controllo;

// variabile parola inversa
var ReverseWord = "";

//condizioni
var j = insertWord.length - 1;

while (j >= 0) {
    controllo = insertWord[j];
    ReverseWord += controllo;
    j--;
}
//stampa la parola ed il suo Reverse
console.log("Hai inserito la parola" + " " + insertWord + " " + " che riscritta al contrario è" + " " + ReverseWord);

//se la parola inserita è uguale alla parola riscritta al contrario allora è palindroma
if (insertWord === ReverseWord) {
    console.log("la parola inserita è palindroma");
}
// ...altrimenti non lo è
else {
    console.log("la parola inserita non è palindroma");
}