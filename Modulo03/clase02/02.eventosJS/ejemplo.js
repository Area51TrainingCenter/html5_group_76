var opcion1=document.getElementById('opcion1');

opcion1.addEventListener("click",tarea1);

function tarea1(){
	alert("Haz seleccionado la opcion 1");
}

var opcion2=document.getElementById('opcion2');
opcion2.addEventListener("dblclick",tarea2);
function tarea2(){
	alert("doble click");

}


var opcion3=document.getElementById('opcion3');
opcion3.addEventListener("contextmenu",tarea3);
function tarea3(){
	event.preventDefault();
	alert("Haz seleccionado menu contextual");

}

function mensaje(){
	alert("click en h1");
}
var link=document.getElementById('opc-link');
link.addEventListener("click",cargar);
function cargar(){
event.preventDefault();
	
	var estado=true;
	if(estado==true){
		window.location="http://www.google.com";
	}
	else{
		alert("selecciona la opcion")
	}
	
}
