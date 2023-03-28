/* Crea una función llamada evaluateGrade() que reciba como parámetro una nota (número) y evalúe la calificación según la nota, retornando:
Si la nota se encuentra entre 0-3: Retorna Muy deficiente
Si la nota se encuentra entre 4-5: Retorna Insuficiente
Si la nota se encuentra entre 6-7: Retorna Bien
Si la nota se encuentra entre 8-9: Retorna Notable
Si la nota se encuentra entre 10: Retorna Sobresaliente */

function evaluateGrade(cal){
    if (0<=cal && cal <3){return "Muy deficiente";}
    if (4<=cal && cal <5){return "Insuficiente";}
    if (6<=cal && cal <7){return "Bien";}
    if (8<=cal && cal <=9){return "Notable";}
    if(cal >9){return "Sobresaliente";}
}