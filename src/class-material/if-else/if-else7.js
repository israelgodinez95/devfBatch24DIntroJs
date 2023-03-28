//Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

let day=prompt("Teclee cualquier dia de la semana: ");

if(day=="Lunes" || day=="lunes" || day=="LUNES"){
    console.log("sad");
} else if((day=="Viernes") || (day=="viernes") || (day=="VIERNES")){
    console.log("yeah!");
}  else if((day=="Sabado") || (day=="sabado") || (day=="SABADO") || (day=="Domingo") || (day=="domingo") || (day=="DOMINGO")){
    console.log("wekkend");
} else{
    console.log("meh");
}