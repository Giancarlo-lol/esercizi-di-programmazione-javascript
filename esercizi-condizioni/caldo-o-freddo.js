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
var coldD= 0;
for (var i=0; i < temp.length; i++){
  if(temp[i]>hotD){
    hotD=temp[i];
  }if(temp[i]<coldD){
    coldD=temp[i]
  }
}
console.log("la temperatura più alta è : " +hotD+ " mentre quella più bassa è : "+coldD)
    
    
