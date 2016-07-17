


var btngrabar=document.getElementById('grabar');
btngrabar.addEventListener("click",validacion);


function validacion(){
	event.preventDefault();
	var nombre=document.getElementById('nombre');
	var valorNombre=nombre.value;
	
	var appellidos=document.getElementById('apellidos');
	var valorNombre=nombre.value;
	var valorApellido=appellidos.value;
	console.log(valorApellido);
	console.log(valorNombre);

	var curso;
	var radios = document.getElementsByName('curso');
length = radios.length
	for (var i = 0; i < length; i++) {
    	if (radios[i].checked) {
        	//alert(radios[i].value);
        		if(radios[i].value=="JS")
        			{
        				alert("el curso ya esta lleno")
        			}
        			else{
        				curso=radios[i].value;
        			}
        			
        	//break;
    		}
	}	

		var textoNombre=document.getElementById("nombret");
		textoNombre.innerHTML="Bienvenido  : "+ valorNombre;
		var textoCurso=document.getElementById("curso");
	textoCurso.innerHTML="acabas de registrarte al curso " + curso;

	var textoMensaje=document.getElementById("mensaje");
	textoMensaje.innerHTML="Gracias por el registro";



}