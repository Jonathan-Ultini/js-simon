// Funzione per generare numeri casuali
function generaNumeriCasuali(quantita, min, max) {
  let numeri = [];
  while (numeri.length < quantita) {
    let numero = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!numeri.includes(numero)) {
      numeri.push(numero);
    }
  }
  return numeri;
}

// Mostra i numeri casuali in pagina
let numeriCasuali = generaNumeriCasuali(5, 0, 100);
document.getElementById('numeri-casuali').innerText = numeriCasuali.join(' - ');

// Avvia il timer di 30 secondi
let tempoRimanente = 30;
let timer = setInterval(function () {
  tempoRimanente--;
  document.getElementById('timer').innerText = `Tempo rimanente: ${tempoRimanente}s`;

  if (tempoRimanente <= 0) {
    clearInterval(timer);
    document.getElementById('numeri-casuali').style.display = 'none';
    document.getElementById('timer').style.display = 'none';
    mostraInput();
  }
}, 1000);

// Funzione per mostrare gli input per l'utente
function mostraInput() {
  let containerInput = document.getElementById('input-numeri');
  for (let i = 0; i < 5; i++) {
    let input = document.createElement('input');
    input.type = 'number';
    input.min = 0;
    input.max = 100;
    containerInput.appendChild(input);
  }
  containerInput.style.display = 'block';
  document.getElementById('verifica').style.display = 'block';
}

// Verifica i numeri inseriti dall'utente
document.getElementById('verifica').addEventListener('click', function () {
  let inputs = document.querySelectorAll('#input-numeri input');
  let numeriUtente = [];

  // Ottieni i numeri dall'utente e verifica che siano validi e non duplicati
  for (let i = 0; i < inputs.length; i++) {
    let numero = parseInt(inputs[i].value);
    if (!isNaN(numero) && numeriUtente.indexOf(numero) === -1) {
      numeriUtente.push(numero);
    }
  }

  // Controlla che ci siano esattamente 5 numeri validi
  if (numeriUtente.length !== 5) {
    alert("Inserisci 5 numeri validi e non duplicati.");
    return;
  }

  // Trova i numeri indovinati
  let numeriIndovinati = [];
  for (let i = 0; i < numeriUtente.length; i++) {
    if (numeriCasuali.includes(numeriUtente[i])) {
      numeriIndovinati.push(numeriUtente[i]);
    }
  }

  // Mostra il risultato
  document.getElementById('risultato').innerText = `Hai indovinato ${numeriIndovinati.length} numero/i: ${numeriIndovinati.join(', ')}`;
});
