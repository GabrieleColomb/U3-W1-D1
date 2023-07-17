"use strict";
function generaNumeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function confrontaNumeri(numeroCasuale, numeroGiocatore1, numeroGiocatore2) {
    const differenzaGiocatore1 = Math.abs(numeroCasuale - numeroGiocatore1);
    const differenzaGiocatore2 = Math.abs(numeroCasuale - numeroGiocatore2);
    if (numeroGiocatore1 === numeroCasuale && numeroGiocatore2 === numeroCasuale) {
        return `Entrambi i giocatori hanno indovinato il numero casuale ${numeroCasuale}!`;
    }
    else if (numeroGiocatore1 === numeroCasuale) {
        return `Il giocatore 1 ha indovinato il numero casuale ${numeroCasuale}!`;
    }
    else if (numeroGiocatore2 === numeroCasuale) {
        return `Il giocatore 2 ha indovinato il numero casuale ${numeroCasuale}!`;
    }
    else {
        if (differenzaGiocatore1 < differenzaGiocatore2) {
            return `Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più.`;
        }
        else if (differenzaGiocatore2 < differenzaGiocatore1) {
            return `Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più.`;
        }
        else {
            return `Nessuno dei due ha azzeccato il numero casuale ed entrambi si sono avvicinati nella stessa misura.`;
        }
    }
}
function riavviaGioco() {
    const giocatore1 = generaNumeroCasuale(1, 100);
    const giocatore2 = generaNumeroCasuale(1, 100);
    const numeroCasuale = generaNumeroCasuale(1, 100);
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<h2>Player1 = ${giocatore1}, Player2 = ${giocatore2}</h2>
                           <h2>Numero casuale generato = ${numeroCasuale}</h2>
                           <p class="result">${confrontaNumeri(numeroCasuale, giocatore1, giocatore2)}</p>`;
}
riavviaGioco();
