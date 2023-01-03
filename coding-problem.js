// String comparison using toLowerCase toUpperCase

const useraName = 'blackPInk';
const useraInput = 'blackpInK';
// console.log(useraName.toUpperCase());
    if(useraName.toLowerCase() === useraInput.toLowerCase()){
        // console.log('valid user')
}
else{
    // console.log('invalid user')
}


// Apply Search includes, indexOf, startswith, endswith




// Math, abs, pow, round, ceil, floor, and random number

for(let i = 0; i < 20; i++){
    const random = Math.random(Math.random()*6);
    // console.log(random)
}


// Who is the tallest? Find the max number in an array

function maxInArray (numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element > largest){
            largest = element;
        }

    }
    return largest;
}

const heights = [ 167, 190, 120, 165, 137]
const tallest = maxInArray(heights)
// console.log('tallest person is:', tallest)


function lowInArray (numbers){
    let smallest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
         const element = numbers[i]
         if(element < smallest) {
            smallest = element;
         }
        }
        return smallest;
}
const numbers = [423, 56, 26,657, 3456, 26,2643 ,242, 226,2,6534,26,245]
const smallest = lowInArray(numbers)
// console.log('smallest number is:', smallest)




//                            Remove duplicate items from an array
 
const names = ['salman', 'khan', 'salman', 'kham', 'habib', 'jarin',  'habib', 'kham']

function removeDuplicate(names){
    const unique = [];
    for (let i = 0; i < names.length; i++){
        const name = names[i]
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names)
// console.log(uniqueNames)

//                           Write foo, bar, foobar if divisible by 3 or 5 or both

for (let i = 1; i <= 50; i++){
    if(i % 3 === 0 && i % 5 === 0){
        // console.log('NAOWAZ KHAN')
    }
    else if(i % 3 === 0){
        // console.log ('NAOWAZ')
    }
    else if(i % 5 === 0){
        // console.log ('KHAN')
    }
    else{
        // console.log(i);
    }

}


//                  wood quantity 
 
function woodCalculate(chairQuantity, tableQuantity, bedQuantity){
    const perChair = 3;
    const perTable = 10;
    const perBed = 50;

    const chairWood =chairQuantity * perChair;
    const tableWood = tableQuantity * perTable
    const bedWood = bedQuantity * perBed;

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood 
}

const totalWood = woodCalculate( 40, 23, 5 )
// console.log ('total wood : ', totalWood)

//                         Find the cheapest phone from an array of phone objects

const phones = [
    {name:'iphone', camera: 9, ram: 12, price: 25000},
    {name:'one plus', camera: 39, ram: 12, price: 72000},
    {name:'samsug', camera: 99, ram: 12, price: 32000},
    {name:'Htc', camera: 79, ram: 12, price: 22000},
    {name:'nokia', camera: 49, ram: 12, price: 32004}
];

function cheapestPhone(phones){
    let cheapest = phones[0]
    for (let i = 0; i < phones.length; i ++){
        const phone = phones[i];
        if(phone.price <cheapest.price){
            cheapest = phone;
        }

    }
    return cheapest;
}

const myPhone = cheapestPhone(phones)
console.log(myPhone);


function highestCamera(phones){
    let highcamera = phones[0]
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if (phone.camera > highcamera.phone){
            highcamera = phone;
        }
    }
    return highcamera;
}

const myphne = highestCamera(phones)
console.log(myphne)
