// Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm

let num=prompt("Introduce un numero:");

if(num%2==0){
    console.log(num + " es divisible entre 2");
} else {
    console.log(num + " no es divisible entre 2");
}