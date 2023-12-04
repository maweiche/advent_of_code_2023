const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.md'), 'utf8');
const inputArray = input.split('\n');

const numberRegex = /\d/g;

const getFirstNumber = (string) => {
    for (let i = 0; i < string.length; i++) {
        const firstNumber = string[i].match(numberRegex);
        if (firstNumber) {
            return firstNumber;
        }
    }
}

const getLastNumber = (string) => {
    for (let i = string.length - 1; i >= 0; i--) {
        const lastNumber = string[i].match(numberRegex);
        if (lastNumber) {
            return lastNumber;
        }
    }
}

async function getSum() {
    let new_array = [];
    for (let i = 0; i < inputArray.length; i++) {
        const firstNumber = getFirstNumber(inputArray[i]);
        const lastNumber = getLastNumber(inputArray[i]);
        const item = [parseInt(firstNumber), parseInt(lastNumber)];
        new_array.push(item);
    }

    const complete_array = []
    for(let i = 0; i < new_array.length; i++) {
        const item = new_array[i];
        const item_combined = item.join('');
        const item_number = parseInt(item_combined);
        complete_array.push(item_number);
    }

    const sum = complete_array.reduce((a, b) => a + b, 0);
    
    console.log('answer: ', sum);

    return sum;
}

getSum();