//Crea una función llamada largest que reciba como parámetro un arreglo de números, esta función debe retornar el número más grande del arreglo.

function largest (arr){
    var control=arr[0];
    for (let i=0; i<=arr.length; i++){
        if(arr[i]>control){
            control=arr[i];
        }
    }
    return control;
}