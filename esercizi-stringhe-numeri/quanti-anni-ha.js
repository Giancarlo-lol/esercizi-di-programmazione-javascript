/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/
var annoCorrente= 2018;
var annoNascita=1991;
var eta = 0;
var anniMancanti = 0;

eta=annoCorrente-annoNascita;
anniMancanti=100-eta;

console.log("hai " + eta + " e ti mancano " + anniMancanti + " per arrivare a 100 anni")
