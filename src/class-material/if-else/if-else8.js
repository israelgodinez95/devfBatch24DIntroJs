/* Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el 
número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. 
Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” 
si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10. */

let cal=prompt("Teclee la calificación: ");

if(cal>=1 && cal<=10){
    if(cal<6){
        console.log("Reprobado");
    } else if(cal>=6 && cal <8){
        console.log("Regular");
    } else if(cal>=8 && cal<9){
        console.log("Bien");
    } else{
        console.log("Excelente");
    }

} else {
    alert("Error, calificacion no valida");
}