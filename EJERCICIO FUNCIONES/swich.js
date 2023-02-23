const wallet = 5;


const verifyWallet = (wallet) => {
    let order;


switch (wallet){
    case 0:
    order = 'llorar';
    break;
    case 5:
        order = '5 picafresas';
        case 10:
        break;
        order = 'Helado de chocochispas';
        case 20:
        break;
        order = 'Papas fritas con salsa';
        case 50:
        break;
            order = 'casita + hamburguesa + cawamita';
        case 100:
        break;
        order = 'Libertad + licencia de winrar';

}    
   return order;
}

const products = ['Awa', 'Maruchan', 'Pizza Valentina', 'Coquita Rosalia', 'Taquitos', 'Gorditas'];

const findPrice = item => {
    let res = 'No ai sistema';

    switch(item) {
        case 0:
            res = `El producto es ${products[item]} y cuesta: $${20}`;
            break;
        case 1 :
            res = `El producto es ${products[item]} y cuesta: $${16}`;
            break;
        case 2 :
            res = `El producto es ${products[item]} y cuesta: $${150}`;
            break;
        case 3 :
            res = `El producto es ${products[item]} y cuesta: $${29.99}`;
            break;
        case 4 :
            res = `El producto es ${products[item]} y cuesta: $${60}`;
            break;
        case 5 :
            res = `El producto es ${products[item]} y cuesta: $${70}`;
            break;
        default:
            res = `No ai sistema`;
            break;
    }
    return res;
}

//console.log(findPrice(4));

const findPrice2 = item => {
    let res = 'No ai sistema';

    switch(item) {
        case 0:
            res = `El producto es ${products[item]} y cuesta: $${20}`;
            break;
        case 1 :
            res = `El producto es ${products[item]} y cuesta: $${16}`;
            break;
        case 2 :
            res = `El producto es ${products[item]} y cuesta: $${150}`;
            break;
        case 3 :
            res = `El producto es ${products[item]} y cuesta: $${29.99}`;
            break;
        case 4 :
            res = `El producto es ${products[item]} y cuesta: $${60}`;
            break;
        case 5 :
            res = `El producto es ${products[item]} y cuesta: $${70}`;
            break;
        default:
            res = `No ai sistema`;
            break;
    }
    return res;
}
const findPrice2 = item => {
    let res;

    switch(item) {
        case 0:
            res = 20;
            break;
        case 1 :
            res = 16;
            break;
        case 2 :
            res = 150;
            break;
        case 3 :
            res = 29.99;
            break;
        case 4 :
            res = 60;
            break;
        case 5 :
            res = 70;
            break;
        default:
            return 'No ai sistema';
            break;
    }


}

console.log((findPrice2));