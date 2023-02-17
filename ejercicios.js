function checkBussinesHour(date){
    let hour = date.getHours()+7
    console.log(hour);
    let bussinesHour =false;
    if (hour>=9 || hour<=18){
        bussinesHour = true;
    }
    return bussinesHour;
}

function checkBussinesDay(date){
    let day = date.getDay();
    console.log(day);
    let bussinesDay = true;
    if(day==0 || day == 6){
        bussinesDay = false;
    }
    return bussinesDay;
}

function checkDayAndHour(hour, day){
    const todayYear = new Date().getFullYear();
    const todayMonth = new Date().getMonth();
    const date = new Date(todayYear, todayMonth+1, day, hour-7);

    console.log(checkBussinesHour(date));
    console.log(checkBussinesDay(date));
}

checkDayAndHour(10, 17);



////////////////////////////////////////////////

const maxComDivisor = (n1, n2) => {
    if (n2 === 0){
        return n1;
    }
    return maxComDivisor(n2, n1 % n2);
}
console.log(maxComDivisor(5,12));

///////////////////////////////////////////////


const arreglo = ['False','True'];
const arr =[];
arr.length
if (arr.length === 0) {
    console.log ("Vacio");
}




// Encontrar el numero n de una figura piramidal triangular (tetrahedron)
// (nivel) -> cantidad de numeritos

// Crear una funcion que tome el nombre de un pais y su area
// (nombre, a)
// Debe regresar la proporcion del area del pais en acorde a el area de tierra en el planeta
//('Russia', 17098242) -> Russia is 11.48%
// ("USA", 9372610) -> "USA is 6.29%

// Escribir una funcion que retorne 0 si el input es 1 y 1 si el input es 0
// No se pueden utilizar condicionales, ternarios, negaciones ni operatores bit

// Messenger bzzz
// (0 ) n
// Si no hay nadie -> "No hay nadie en linea"
// Si hay 1 persona -> "user1 esta en linea"
// Si hay 2 personas -> "user1 y user2 estan en linea"
// Si hay n>2 personas, "user1 y n-1 mas estan en linea"


/* let today = new Date(0-6);

let days = ['Sunday','Monday','Tueday','Wednesday','Thurday','Friday','Saturday'];
let daysOfWeek = today.getDay();
console.log('Today is: ${days[daysOfWeek]}');

console.log();

let hours = days.getHours();
let minutes = today.getMinutes();

let */