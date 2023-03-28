/* Crea una función llamada isChristmas() que reciba como parámetro una fecha cualquiera (“dia-mes-año”), y verifica si dicha fecha corresponde a Navidad.
Retorna true. En caso de que sea Navidad.
Retorna false. En caso de no sea Navidad. */

function isChristmas(date){
    splitdate=date.split("-",2);
    if(splitdate[0]==25 && splitdate[1]==12){
        return true;
    } else {
        return false
    }
}