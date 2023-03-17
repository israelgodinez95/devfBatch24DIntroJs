var persona1 ={ 
    id: 123,
    nombre : "Israel" ,
    edad : 27,
    casado: false,
    email: "isra.gb47@gmail.com",
    num_galletas: 5,
    "primer apellido": "Pikman",

};

var persona2 ={ 

    id: 124,
    nombre : "Isra" ,
    edad : 30,
    casado: true,
    email: "isra.gb@gmail.com",
    num_galletas: 3,

};

//consultar la informacion de los objetos literles por notacion de punto    
console.log("por punto-> Hola, mi nombre es " + persona1.nombre + " " + persona1["primer apellido"]);


//consultar la informacion de los objetos literles por notacion de llave cuadrada  
console.log("Por llaves-> Hola, mi nombre es " +persona1["nombre"]);

//in me ayuda a verificafr si una clace esta en mi objeto literal 
console.log("direccion" in persona1)//false
console.log("nombre" in persona1); //true

console.log(Object.keys(persona1));

var nombreEnPersona="nombre" in persona2;
console.log(nombreEnPersona);