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

