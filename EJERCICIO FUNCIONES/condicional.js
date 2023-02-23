const parImpar = (n) => {
    return (n % 2 == 0 && n != 0) ? true : false;
}

const evenOdd = (n) => {
    if (n % 2 == 0 && n != 0) {
        return true
    } else {
        return false
    }
}

const evenOdd2 = n => {
    let res = false;

    if (n % 2 == 0 && n != 0) {
        res = true;
    }

    return res;
}

console.log(evenOdd2(16))


const verifyAge2 = (birthyear) => {
    const currentYear = new Date().getFullYear();
   
    if(concurretYear - birthyear >= 18){
        return true
    } else{
        return false
    }
    const cpncurrentYear = new Date(). getFullYear();
    let res = false;
    if(concurretYear - birthyear >= 18){
        res = true
    }
}

const verifyAge3 = birthyear =>{
    const currentYear = new Date().getFullYear();
    return (concurretYear - birthyear >= 18)
    ? "Mayor de edad" : "No cumple la edad necesaria"
console.log(verifyAge(2005));
}