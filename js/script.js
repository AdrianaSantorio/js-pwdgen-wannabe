console.log ('JS OK')

// Chiedi all’utente il suo nome
// chiedi il suo cognome,
// chiedi il suo colore preferito
// crea la  password con pattern nomecognomecolore21
// recupera un elemento dalla pagina
// modifica il contenuto testuale

// Infine scrivi sulla pagina nomecognomecolorepreferito21

const nome = prompt('Inserire Nome');

console.log(nome);

const cognome = prompt('Inserire Cognome');

console.log(cognome);

const colore = prompt("Qual è il tuo colore preferito?");

console.log(colore)

const password = nome + cognome + colore + '21';

console.log(password)

const suggestedPasswordElement = document.getElementById('suggestedpassword');

suggestedPasswordElement.innerText = `La tua password suggerita è ${password}`;