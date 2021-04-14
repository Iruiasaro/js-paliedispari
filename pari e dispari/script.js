//scegli se essere pari o dispari
var pariDispari = prompt("Pari o Dispari?");

//scegliere un numero da 1 a 5
var numeroScelto = parseInt(prompt("Da 1 a 5 quale numero scegli?"));


//l'utente deve necessariamente inserire un numero da 1 a 5
if (Number.isNaN(numeroScelto) || numeroScelto < 1 || numeroScelto > 5) {
    alert("ATTENZIONE, DEVI INSERIRE UN NUMERO DA 1 A 5!")
}

