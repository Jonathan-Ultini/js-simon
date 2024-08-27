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

