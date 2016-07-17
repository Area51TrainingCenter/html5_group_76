
var num1=Math.round(Math.random()*10);
var num2=Math.round(Math.random()*10);
var suma=num1+num2;
document.getElementById("num1").innerHTML=num1;
document.getElementById("num2").innerHTML=num2;


var btngrabar=document.getElementById('grabar');
btngrabar.addEventListener("click",validar);

function validar(){
	event.preventDefault();
	var captcha=document.getElementById("suma").value;
	if(captcha==suma){
		
		window.location="acceso.html";
	}
	else{
	window.location="error.html";

	}
}