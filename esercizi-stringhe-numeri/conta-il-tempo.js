/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/
var resto =0
var secondi = 12560;
var minuti = 0;
var ore = 0;
resto= (secondi%3600);
ore = (secondi/3600)- resto/3600;
minuti=((resto/60)-((resto%60)/60));
secondi=(resto%60);                    
console.log(ore+' ore '+minuti+' minuti '+secondi+' secondi');
