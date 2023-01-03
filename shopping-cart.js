const products = [
    {name: 'shirt', price: 1200, quantity: 5},
    {name: 'pant', price: 2200, quantity: 5},
    {name: 'tshirt', price: 900, quantity: 25}
];

function totalCoast(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i]
        const productTotal = product.price* product.quantity;
        sum = sum + productTotal;
    }
    return sum;
}

const expense = totalCoast(products)
console.log('total expense:', expense)
