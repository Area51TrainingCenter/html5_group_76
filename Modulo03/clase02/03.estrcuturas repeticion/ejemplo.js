
for (var i = 0; i <10 ; i++) {
	
	var numeroPar=i%2;
	//var numero=3
	if(numeroPar==0){
		console.log("Bienvenido a las estrucutras de repeticion");
	}
	

}

	for (var i = 0; i <500 ; i++) {
	
	console.log("escribir en la pizarr")
	
	}



for (var i = 0; i <= 15; i++) {
	//var op=12*i;
	//console.log("multiplicado 1 * " + i + " = " +op );
	for (var j = 0; j <= 12; j++) {
		console.log(i + " * " + j + " = " + (i*j));
	}
}




// recordando un poco sobre arreglos 
var nombres = ["juan Carlos",
				"Diego",
				"Luciana",
				"Hector",
				"Fiorella",
				"Miguel",
				"Francisco",
				"Luciana",
				"Hector",
				"Fiorella",
				"Miguel",
				"Francisco",
				"Luciana",
				"Hector",
				"Fernando",
				"Miguel",
				"Francisco",
				"Luciana",
				"Hector",
				"Fiorella",
				"Miguel",
				"Francisco",
				"Luciana",
				"Hector",
				"Fiorella",
				"Miguel",
				"Francisco",
				"Luciana",
				"Hector",
				"Fiorella",
				"Miguel",
				"Francisco",
				"Luciana",
				"Hector",
				"Fiorella",
				"Miguel",
				"Francisco",
				"Luciana",
				"Hector",
				"Fiorella",
				"Miguel",
				"Francisco",
				"Luciana",
				"Hector",
				"Fiorella",
				"Miguel",
				"Francisco",
				"Luciana",
				"Hector",
				"Fiorella",
				"Miguel",
				"Francisco"
				]

// si qusiera imprimir cada uno de ellos ??


console.log("nombre :" +nombres[0])
console.log("nombre :" +nombres[1])
console.log("nombre :" +nombres[2])
console.log("nombre :" +nombres[3])
console.log("nombre :" +nombres[4])
console.log("nombre :" +nombres[5])
console.log("nombre :" +nombres[6])


// existira alguna forma más facil de imprimir todos los elementos
var limite=nombres.length;
for(var i=0;i<limite;i++){

console.log("nombre :" +nombres[i])
}


// como podre buscar a un alumno en una lista de 20 alumnos

var codigo = ["123",
			  "456",
			  "789",
			  "000"
			 ]

var codigusuario="000";

for (var i = 0; i <codigo.length; i++) {
	var comparacion=codigo[i];
	if(codigusuario==comparacion){
		alert("codigo correcto");
	}

	
	}


