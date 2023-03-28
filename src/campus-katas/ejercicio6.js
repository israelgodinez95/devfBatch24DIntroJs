// Crear un ciclo for o while que almacene en un array llamado pares los numeros pares que hay entre el 0 y el 100, empezando desde 0

var pares=[ ];
var j=0;
for (let i =0; i<=100; i++){
    if(  i%2==0){
        pares[j]=i;
        j++;
    }
}