/* Solicitar al usuario que ingrese tres números 
y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales. */

let arr=[];

arr[0]=prompt("Ingrese un numero:");
arr[1]=prompt("Ingrese otro numero");
arr[2]=prompt("Ingrese otro numero");

//console.log(Math.min(...arr.sort(function(a,b) {return(a-b)})));

sortarr=arr.sort(function(a,b){return a-b});
console.log("El mayor de los numeros es: " + Math.max(...sortarr));

if(sortarr[2]==sortarr[1] && sortarr[1]==sortarr[0]){
    console.log("y se repite 3 veces");
} else if( sortarr[2]==sortarr[1]){
    console.log("y se repite 2 veces");
}