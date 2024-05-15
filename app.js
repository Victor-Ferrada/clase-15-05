// cree un arreglo con 5 nombres de alumnos 
// y para cada alumno en otro arreglo sus notas
//Muestre el nombre del alumno con la nota Mayor
//nombres
let nombresDeAlumnos = ['Juan', 'Ana', 'Carlos', 'Maria', 'Pedro'];
//notas
let notasDeAlumnos = [35, 45, 28, 12, 48];
//encontrar nota más alta
let indiceDeNotaMayor = notasDeAlumnos.indexOf(Math.max(...notasDeAlumnos));
//encontrar el nombre del alumno
let nombreDeAlumnoConNotaMayor = nombresDeAlumnos[indiceDeNotaMayor];
// Mostrar el nombre del alumno
console.log(nombreDeAlumnoConNotaMayor);
document.write("<br>"+"La persona con la nota mas alta es = "+nombreDeAlumnoConNotaMayor+"con un = "+Math.max(...notasDeAlumnos))

//como lo hizo la profesora
let alumnosP=["Ana","Boris","Carlos","Daniel","Ernesto"]
let notasP=[1.6,3.3,5.5,6.2,6.8]
let numMayP=0
let sumaP=0;
for (let i=0;i<notasP.length;i++){
    sumaP=sumaP+notasP[i]
    if (numMayP<notasP[i]){
        numMayP=notasP[i]
    }
}
let posicion=notasP.indexOf(numMayP)
console.log("El alumno "+alumnosP[posicion]+" tiene la nota "+notasP[posicion])
let prom=sumaP/notasP.length
console.log("promedio ", prom)
console.log("El promedio es : ",prom.toFixed(3))
console.log("El promedio es : ",Math.ceil(prom))
console.log("El promedio es : ",Math.floor(prom))


// cree un arreglo que almacene las temperaturas de una semana de Lunes a Viernes
// Muestre cual es la tempetarura promedio
// Muestre el dia de la temperatura mas alta y mas baja

// realice como minimo 2 funciones

// con el siguiente arreglo
// datos=[25,4,7,8,55,2,24,44,1]
// Muestre ordenado  de menor a mayor los datos

//utilice como minimo una función




//Pogramacion orientada a objeto
//paso de parametros por referencias solo arreglos y objetos

function vehiculos(auto){
    auto.marca="JEEP";
}

let auto ={marca:"Mercedes",modelo:"jeep",anio:2020};

document.write("<br>"+"Fuera de la funcion "+auto.marca);

vehiculos(auto);
document.write("<br>"+"Dentro de la funcion "+auto.marca);


//paso de parametros por valor se afecta las variables

function porvalor(auto){
    auto="JEEP";
}

let auto1="Camioneta"

porvalor(auto1);
document.write("<br>"+"<br>"+"el contenido de la variable es = "+auto1);

let alumnos = [{nombre:"Ana",edad:12},{nombre:"carlos",edad:23}]
let suma=0;
alumnos.forEach(calcular);


function calcular(item){
    suma+=parseInt(item.edad);
    return suma;
}
document

document.write("<br>"+"<br>"+`el total de la suma de las edades es:${suma}`);

