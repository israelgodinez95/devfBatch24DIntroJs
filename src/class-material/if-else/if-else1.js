//Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.

let ans=prompt("Eres bellisimo?");

if(ans=="si" || ans=="Si" || ans=="Sí" || ans=="sí" || ans=="SI"){
    console.log("Ciertamente.");
} else if (ans=="no" || ans=="No" || ans=="NO"){
    console.log("No te creo.");
}