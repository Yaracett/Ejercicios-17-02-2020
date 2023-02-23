///***EJEMPLO***//////////////////// */


const arr = ['a', 'b', 'c', 'd'];

const bucle1 = (arr) => {

    for (let cont = 0; cont <= 10; cont++) {

        console.log(cont);

    }
}
bucle1(arr);


//////***EJERCICIO 2 ****//////////////////////

// Encontrar el numero mas grande
/* const arr2 = [1, -563, 999, 0 , -1, -999];

const bucle2 = (arr2) =>{
    for(let cont = 1; cont <=999; cont++){
        console.log(cont);
    }
}
bucle2(arr2); */
// Encontrar el numero mas pequeño
// Encontrar el numero mas grande y el mas pequeño
// -> [10, -9];

// Encontrar la suma de todos los resistores conectados en serie
// sumResistance([1, 5, 6, 3]) -> "15 ohms"
// sumResitance([14,3.5,6]) -> "25.5 ohms"
// Ohms >= 1


// Dado un numero, regresar el mismo numero divido en sus mitades dentro de un array
// numDiv(4) -> [2, 2];
// nuvDiv(10) -> [5, 5];
// numDiv(100) -> [50,50];


//////////////////***AQUÍ TERMINA***////////////////



////////////////////////////////****MÉTODOS-*****///////////////////////////


// forEach
//Por cada elemento de un arrar/objeto/matriz el cloque de código


const names = ['Yaracett', 'Felipe', 'Fer', 'Magali', 'Zabdiel'];
// forEach
// por Cada elemento de un array/objeto/matriz realizar el bloque de codigo
// Comunmente utiliza funciones anonimas para su ejecucion



console.log(names.indexOf('Rafael'));
console.log(7 == '7');

console.log(names.pop());
console.log(names);

console.log(names.push('sergio'));
console.log(names);

names.shift();
console.log(names);

names.unshift('Hugo');
console.log(names);

delete names[1];
console.log(names);

console.log(names);
names.splice(1, 0, 'Hugo', 'Carlos');
console.log(names);

console.log(names);
const arr2 = (names.slice(2, 4));
console.log(arr2);





/* names.forEach((elemento, index, arr) => {
    console.log(elemento);
    console.log(index);
    console.log(arr);
});
 */
/*
names.forEach(function (elemento, index, arr) {
    console.log(elemento);
    console.log(index);
    console.log(arr);
});
*/

/* const secretName = (["Felipe", "Fer", "Zabdiel"]) -> FFZ */



// Slice corta el array de (index inicial, index final) y crea uno nuevo con ese rango
// console.log(names);
// const arr2 = names.slice(2, 4);
// console.log(arr2);

// map
// Conserva la integridad del array/objeto original y crea uno nuevo a partir de instrucciones que le demos



/* const newNames = names.map(elemento => {
    return elemento.toUpperCase();
});

console.log(newNames); */

// names.forEach( e => console.log(e));

// arr.forEach(valor, index, arr);

// filter
// Mantiene la integridad del array/objeto original y crea uno nuevo a partir del filtro que le indiquemos

const carrito = [2000, 50, 500, 1500, 999.99];

const carritoFiltrado = carrito.filter(elemento => {
    return elemento <= 1500;
});

console.log(carritoFiltrado);

/////////////////******AQUÍ TERMINA******////////////////////// */

///////////****EJERCICIO 3****//////////////////////////////// */

// Encontrar el nombre de una sociedad secreta segun los datos de los nombres para cada integrante
// secretName(["Felipe", "Fer", "Zabdiel"]) -> FFZ
// secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']) -> CJMPRR
// secretName(['Harry', 'Ron', 'Hermione']) -> HHR

/*
ALGORITMO
1-Asignar nombre a la sociedad
2-Definir los arreglos 
3-seleccionar el elemento 
4-Recorrer las palabras para determinar cada inicial
5-conocer las iniciales de cada nombre


*/

//////////////////////////////////////
// const arr = [1,2,3,4,5];
// const arr2 = [1, -563, 999, 0 , -1, -999];

//Número mayor

const numArr = [1, 2, 3, 4, 5];
const numArr2 = [1, -563, 999, 0, -1, -999];

const findBiggest = (arr) => {
    let counter = 0;
    let biggest = arr[counter];

    while (counter < arr.length) {

        if (biggest < arr[counter]) {
            biggest = arr[counter];
        }

        counter++;
    }
    return biggest;
}

console.log(findBiggest(numArr));

//Número menor

const findSmallest = (arr2) => {
    let counter = 0;
    let smallest = arr[counter];

    do {
        if (smallest > arr2[counter]) {
            smallest = arr2[counter];
        }
        counter++;
    } while (counter < arr2.length)


    return smallest;
}

console.log(findSmallest(numArr2));


////////////// array infinito








// onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']) -> 'mockIng99, J0eyPunch and one 1 more online'
// Crear una funcion que tome 2 parametros, (numero, longitud) y regrse un array de longitud cantidad de numeros multiplos del numero por parametro
// arrayMultiplos(2, 10) -> [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// arrayMultiplos(17, 6) -> [17, 34, 51, 68, 85, 102]


// Escrbir una funcion que descubra si el array es dominante positivo
// Un array es positivo dominante cuando la mayoria de sus elementos son positivos -> [1, -2, 55, 10]
// positiveDom([-1, -3, -5, 4, 6767]) -> false


// Promedio antipode
// Dado un array, devolver un array de menor longitud de acuerdo a los siguentes pasos:
// - Dividir el array en 2 partes iguales*. Si no son iguales, eliminar el elemento en medio para obtener 2 arrays iguales
// - Sumar cada numero de la primera parte con los numeros inversos de la segunda parte
// [1,2,3] [5,22,6] -> 1 + 6, 2 + 22, 3 + 5 -> [7, 24, 8]
// - Dividir cada numero del array final entre 2  -> [3.5, 12, 4]

function antipode(array) {

    let arrayLeft = [];
    let arrayRigth = [];
    let salida = [];


    if (array.length % 2 == 0) {

        arrayLeft = array.slice(0, array.length / 2);
        console.log(arrayLeft);

        arrayRigth = array.slice(array.length / 2);
        console.log(arrayRigth);
        arrayRigth.reverse();



    }

    else {

        arrayLeft = array.slice(0, array.length / 2 - 0.5);
        console.log(arrayLeft);

        arrayRigth = array.slice(array.length / 2 + 0.5);
        console.log(arrayRigth);
        arrayRigth.reverse();
        console.log(arrayRigth);


    }


    for (let cont = 0; cont < arrayRigth.length; cont++) {

        salida[cont] = (arrayRigth[cont] / (2)) + (arrayLeft[cont] / (2));



    }

    console.log(salida);
    return (salida);



}
antipode([1, 2, 3, 5, 22, 6, 8]);
antipode([10, 8, 20, 7, 4]);


///////////////////****MATRIX****////////////////////////////////////

//math.matrix

//diferencia entre array y matrix

const arrayM = [[2, 0], [-1, 3]];

//const matrix = math.matrix([[2,0],[-1,3]]); falta libreria

const matrix3 = [[-1, 0, 7], [1, 5, 4], [3, -6, 0]];




let numberArr = [
    [10, -20, 60],
    [8, 10, 52],
    [15, -5, 24],
    [-26, 28, 43],
    [12, 16, -51]
];

let sum = 0;

numberArr.forEach(row => {
    row.forEach(element => {
        sum += element;
    })
})

console.log(sum);

