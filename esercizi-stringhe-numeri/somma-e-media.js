/*
  Somma e media
  Scrivi un programma che dati 5 numeri restituisca in output la somma e la media.

  Esempio:
    Input: a = 1, b = 2, c = 3, d = 4, e = 5
    Output: somma = 15, media = 3
  
  http://www.imparareaprogrammare.it
*/
var numeri=[1,2,3,4,5];
/*var a=1;
var b=2;
var c=3;
var d=4;
var e=5;*/
var somma = 0;// a+b+c+d+e
var media = 0;// somma/5
for(var i=0; i < numeri.length ; i++){
  somma= somma+numeri[i];}
media=somma/i;
console.log( "somma = "+somma+" , media = "+media);
