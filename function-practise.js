function inchToFeet(inches) {
    const feet = inches / 12;
    return feet;
}

const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches)
// console.log( 'dada Feet: ',dadaFeet)



function milesToKilometer(miles) {
    const kilometer = miles * 1.60934;
    return kilometer;
}

const johnMiles = 2;
const johnKm = milesToKilometer(johnMiles)
// console.log(johnKm)

function isEven(number) {
    const remainder = number % 2;

    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }
}

const myNumber = isEven(745325)
// console.log (myNumber)

function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }
}

const myYear = isLeapYear(2035)
// console.log('my year: ', myYear)

function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index]
        sum = sum + element;
        // console.log( index, element, sum)
    }
    return sum;
}

// getSumOfAnArray(numbers);



//               20-6 Get Odd Numbers of an array and get odd Sum of an array


function getOddNumbersOfAnArray(numbers) {
    const evenNumbers = []
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index]
        if (element % 2 !== 0) {
            // console.log(index, element)
            evenNumbers.push(element)

        }
    }
    return evenNumbers;
}

const numbers = [33, 32, 52, 78, 43, 90, 24, 64, 27, 45]
const evenNumbers = getOddNumbersOfAnArray(numbers)
const sumEven = getSumOfAnArray(evenNumbers)
//  console.log(sumEven)
//   console.log(evenNumbers)

//20-7 Calculate Factorial of a number using for loop

function factorial(number) {
    let result = 1
    for (let i = 1; i <= number; i++) {
        result = result * i;
        console.log(i, result)
    }
    return result;
}
 factorial(546)
