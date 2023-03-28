// Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir "Ganaste un premio", en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.

let clientNumber=prompt("Teclee su numero de cliente:");

if(clientNumber==1000){
    console.log("Ganaste un premio");
} else{
    console.log(clientNumber +" lo sentimos, sigue participando");
}