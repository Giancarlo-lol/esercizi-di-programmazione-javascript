/*
  Che giorno è oggi?
  Scrivi un programma che dato un numero intero compreso tra 1 a 7
  visualizzi il corrispondente giorno della settimana. Sapendo che:
    1 = lunedì
    2 = martedì
    3 = mercoledì
    ...
    7 = domenica
  Utilizza il costrutto Switch-case e prevedi anche il caso in cui il valore immesso non sia valido
  (nel caso stampare un messaggio di errore a tua scelta).

  Esempi:
    Input: numero = 6
    Output: "Sabato"

    Input: numero = 10
    Output: "Errore! Giorno della settimana non valido!"

  Variante:
  Scrivere una versione che anziché i giorni della settimana, visualizzi i nomi dei mesi.

  http://www.imparareaprogrammare.it
*/
var day= [lunedi,martedi,mercoledi,giovedi,venerdi, sabato,domenica];
var input= 10;
switch(day[input]){
case day[1]:
console.log(day[1]);
break;
case day[2]:
console.log(day[2]);
break;
case day[3]:
console.log(day[3]);
break;
case day[4]:
console.log(day[4]);
break;
case day[5]:
console.log(day[5]);
break
case day[6]:
console.log(day[6]);
break
case day[7]:
console.log(day[7]);
break
default:
console.log("Errore! Giorno della settimana non valido!");
