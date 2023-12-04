const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.md'), 'utf8');
const DIGIT_STRINGS = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

const getDigit = (word, index) => {
    for(const [i, digitString] of DIGIT_STRINGS.entries()) {
        if(word.slice(index).startsWith(digitString)) return i + 1;
    }
    return parseInt(word[index]) || 0;
}

const getCalibrationValue = (word) => {
    let firstDigit = 0, lastDigit = 0;
    word.split('').forEach((_, i) => {
        const digit = getDigit(word, i);
        if(digit === 0) return;
        lastDigit = digit ?? lastDigit;
        if(firstDigit !== 0) return;
        firstDigit = digit ?? firstDigit;
    });
    return firstDigit * 10 + lastDigit;
}

const solve = (input) => {
    return input.split('\n').reduce((acc, value) => acc + getCalibrationValue(value), 0);
}

console.log(solve(input));