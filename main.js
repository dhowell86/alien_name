const firstSyllables = [];
const secondSyllables = [];
const thirdSyllables = [];

const randomSelector = array => {
    let i = Math.floor(Math.random()*array.length)
    return array[i];
}

let firstPart = randomSelector(firstSyllables);
let secondPart = randomSelector(secondSyllables);
let thirdPart = randomSelector(thirdSyllables);

console.log(`Your alien name is: ${firstPart}${secondPart}${thirdPart}`);