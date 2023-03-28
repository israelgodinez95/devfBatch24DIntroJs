/* Escribe una función llamada evaluate que reciba como parámetro un número retorne lo siguiente:
"Positivo" si el número es positivo.
"Negativo" si el número es negativo.
"Cero" si el número es cero. */

function evaluate (num){
    if (num ==0){ return "Cero"}
    if(num<0){return "Negativo"}
    if(num>0){return "Positivo"}
}