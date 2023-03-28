/* Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones.
Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la 
opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual:
Course: $4999 MXN
Carrera $3999 MXN
Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
Beca Facebook: 20% de descuento.
Beca Google: 15% de descuento.
Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el 
curso elegido, tomando en cuenta las siguientes duraciones:
Course: 2 meses
Carrera 6 meses
Master: 12 meses
*/

let program = prompt("Teclee el porgrama que quiere cursar:").toLowerCase();
let discount = prompt("Cuenta con beca? Teclee el nombre de la beca correspondiente (en caso de comtar con una):").toLowerCase();

if (((program == "course") || (program == "carrera") || (program == "master")) && ((discount == "facebook") || (discount == "google") || (discount == "jesua"))) {
    if (program == "course") {

        if (discount == "facebook") {
            console.log("El costo mensual de la modalidad " + program + " con descuento " + discount + ",es de $3,999.2 MXN");
            console.log("Y su costo total sera de $7,998.4 (2 meses)");
        } else if (discount == "google") {
            console.log("El costo mensual de la modalidad " + program + " con descuento " + discount + ",es de $4,249.15 MXN");
            console.log("Y su costo total sera de $8,498.3 (2 meses)");
        } else if (discount == "jesua") {
            console.log("El costo mensual de la modalidad " + program + " con descuento " + discount + ",es de $2,499.5 MXN");
            console.log("Y su costo total sera de $4,999 (2 meses)");
        }

    } else if (program == "carrera") {
        
        if (discount == "facebook") {
            console.log("El costo mensual de la modalidad " + program + " con descuento " + discount + ",es de $3,199.2 MXN");
            console.log("Y su costo total sera de $19,195.2 (6 meses)");
        } else if (discount == "google") {
            console.log("El costo mensual de la modalidad " + program + " con descuento " + discount + ",es de $3,399.15 MXN");
            console.log("Y su costo total sera de $20,394.9 (6 meses)");
        } else if (discount == "jesua") {
            console.log("El costo mensual de la modalidad " + program + " con descuento " + discount + ",es de $1,999.5 MXN");
            console.log("Y su costo total sera de $11,997 (6 meses)");
        }

    } else if (program == "master") {
        
        if (discount == "facebook") {
            console.log("El costo mensual de la modalidad " + program + " con descuento " + discount + ",es de $2,399.2 MXN");
            console.log("Y su costo total sera de $28,790.4 (12 meses)");
        } else if (discount == "google") {
            console.log("El costo mensual de la modalidad " + program + " con descuento " + discount + ",es de $2,549.15 MXN");
            console.log("Y su costo total sera de $30,589.8 (12 meses)");
        } else if (discount == "jesua") {
            console.log("El costo mensual de la modalidad " + program + " con descuento " + discount + ",es de $1,499.5 MXN");
            console.log("Y su costo total sera de $17,994 (12 meses)");
        }

    } else {
        alert("Ingreso mal un dato");
    }
}
