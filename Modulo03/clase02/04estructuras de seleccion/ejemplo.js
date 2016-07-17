
var numero=Math.round(Math.random()*10);
console.log("el numero aleatorio es : " + numero)
switch(numero) {
  case 5:
    console.log("ganaste con el numero 5");
    break;
  case 8:
    console.log("ganaste con el numero 9");
    break;
 
  default:
 	   console.log("Vuelve a intentar");
  break;
}