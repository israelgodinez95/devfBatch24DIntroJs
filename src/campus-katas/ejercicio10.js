/* Crea una función llamada game que simule el juego "Piedra, papel y tijeras", la función recibirá como parámetros como se muestra a continuación:
game("Piedra", "Papel") Jugador 1 ha seleccionado "Piedra" y jugador 2 ha seleccionado "Papel", por lo tanto el ganador es el jugador 2.
La función unicamente recibirá como parámetro "Piedra", "Papel" o "Tijeras", retornar lo siguiente:
"J1" Si ha ganado el jugador 1.
"J2" Si ha ganado el jugador 2.
"Empate" Si hay un empate. */


function game (p1, p2){
    if( p1===p2){return "Empate";}
    if((p1=="Piedra" && p2=="Tijeras") || (p1=="Papel" && p2=="Piedra") || (p1=="Tijeras" && p2=="Papel")) { return "J1";} else { return "J2";}
}