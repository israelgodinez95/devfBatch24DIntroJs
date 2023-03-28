//PROBLEMA: permitir que una persona se vacune si cumple con: 
//mayor de 18 años
//embarazada con mas de 9 semanas de gestacion, mayor de 18
// personas >=30 años este año


/*
var paciente={ 
    edad:20, 
    municipioFronterizo:true,
    embarazo:false,
    semanasGestacion:6,
}; */

var edad=30;
var municipioFronterizo=true;
var embarazo=true;
var semanasGestacion=2;

if ((edad>=18 && municipioFronterizo) || (embarazo && semanasGestacion>=9 && edad>=18) || (edad>=30)){

    console.log("Puedes vacunarte!");

} else {
    console.log("No puedes vacunarte");
}