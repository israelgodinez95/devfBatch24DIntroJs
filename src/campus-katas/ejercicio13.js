/*Crea una función llamada isMinor() que recibe tres parámetros numéricos y evalúe:
En caso de que alguno de los números sea menor a 10 retorna true.
En caso de que ninguno de los números sean menores a 10 retorna false. */


function isMinor (a,b,c){
    if(a>10 || b>10 || c>10){
        return true;
        } 
     if (a<=10 && b<=10 &&c<=10) {
            return false;
            }
}