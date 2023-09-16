var Numero;
var Resultado;

Numero = parseInt(prompt("Hola, por favor ingrese un numero"));

if (Numero > 0 && Numero < 10) {
    
    Resultado = Numero * Numero;

} else if (Numero > 9 && Numero < 100) {

    Resultado = Numero * 2;
    
}  else if (Numero > 99 && Numero < 1000) {

    Resultado = Numero - 100;

}  else {

    Resultado = "Número no válido";
}

alert("HOLAA segun con las condiciones de la logica, su resultado es " + Resultado ); 