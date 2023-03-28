// Crea una función llamada multiple que reciba como parámetro un número para evaluar si un número es divisible entre 5 y 11 o no lo es. En caso de ser divisible entre 5 y 11, retornar true En caso de no ser divisible entre 5 y 11, retornar false

function multiple (num){
    if (num%5==0 && num%11==0){
        return true;
    } else {
        return false;
    }
}