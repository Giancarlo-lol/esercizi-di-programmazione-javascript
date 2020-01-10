/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/
var temp = [a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7];
var hotD = 0;
var hloc;
var coldD= 0;
var cloc;
for (var i=0; i < temp.length; i++){
  if(temp[i]>hotD){
    hotD=temp[i];
    hloc=i+1;
  }if(temp[i]<coldD){
    coldD=temp[i];
    cloc=i+1;
  }
}
console.log("la temperatura più alta è : " +hotD+ " mentre quella più bassa è : "+coldD)
console.log("la giornata più calda è la " +hloc+ " la giornata più fredda è la " + cloc)    
    
