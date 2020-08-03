
//generatore di password casuali e poco utile

// richiesta nome
var nome = prompt("Inserisci il tuo nome:");
console.log(nome);

// richiesta cognome
var cognome = prompt("Inserisci il tuo cognome:");
console.log(cognome);

// richiesta colore preferito
var colore = prompt("Inserisci il tuo colore preferito:");
console.log(colore);

//generatore numero casuale
var numero = Math.round(Math.random()*100);
// document.getElementById("number").innerHTML ="Numero casuale " + numero;

// creazione password
var password = nome + cognome + colore + numero;
document.getElementById("psw").innerHTML = password;
