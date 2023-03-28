// Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.

let num1=prompt("Ingrese un numero:");
let num2=prompt("Ingrese otro numero");

if(num1>num2){
    console.log("El numero menor es: " + num2);
} else {
    console.log("El numero menor es: "+ num1);
}
