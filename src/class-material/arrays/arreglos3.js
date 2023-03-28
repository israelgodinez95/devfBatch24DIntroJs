// De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo. (OPCIONAL)

var arr=[10,40,30,20,15,5];
console.log("Arreglo original: " + arr + ".");

var sortarr=arr.sort(function(a,b){return a-b;});

console.log("Arreglo ordenado: "+ sortarr + ".");
console.log("Elemento menor: "+ sortarr[0] + ".");
console.log("Elemento mayor: "+ sortarr[(sortarr.length-1)] + ".");

/* o usar:
console.log(Math.min(...sortarr));
console.log(Math.max(...sortarr)); */