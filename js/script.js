//1)chiedete all'utente un cognome e aggiungetelo alla lista,
//2)poi ordinate,
//3)utilizzate una funzionalità di js per l'ordinamento.
//4)Dopo aver ordinato, l'esercizio chiede l'indice del nuovo elemento inserito,
//per farlo utilizzate il metodo della ricerca dell'ultima esercitazione.

// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// (quindi dobbiamo avere già definito questo array)
// stampa la lista ordinata alfabeticamente (quindi devo averla ordinata prima di stamparla)
// scrivi anche la posizione “umana” della lista in cui il nuovo utente si trova

var question = prompt("Immetti il cognome");
var cognomi = ["Rossi", "Baudo", "Musa","Gattuso"];
cognomi = cognomi + "," + question; //cognomi += question;

cognomi.sort();
console.log(cognomi);



for(i = 0; i < cognomi.length; i++){
  // console.log(cognomi[i].localeCompare(question));
  //cognomi.indexOf(question);
}
