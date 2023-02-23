
/* 
function convertirRadianesGrados(radianes){

   return radianes * (180/Math.PI);

}

console.log(convertirRadianesGrados(Math.PI/2));
console.log(convertirRadianesGrados(Math.PI));
console.log(convertirRadianesGrados(Math.PI*2));


const suma = (a,b) => a + b;
const squared = x => x *x;

const puntosTotales = (c1, c2) => c1 * 2 c2; */

/* constPobl = (pi,n) =>(30 * 12 *n ) + pi;
console.log(calcPobl(5240,3));
 */


// Conviertan un Array de caracteres  -> 'Zabdiel'
const arrayName = ['z','a','b','d','i','e','l'];


const arrayToString = arr => {
    return arr.join('_');
}

console.log(arrayToString(arrayName));


const circleSquare = (r,a) => {
    const circ = 2 *Math.PI * r;
    const per = Math.sqrt(a) * 4;

    return  (circ > per) ? true : false;
}

console.log(circleSquare(16, 625));

const calcKineticE = (m, v) => {
    return (1/2) * m * (v ** 2);
}

console.log(calcKineticE(63.5, 7.35));

