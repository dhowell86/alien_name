const firstSyllables = ['Dat', 'Omni', 'Darth', 'Mel', 'Tun', 'Et', 'Ich', 'Bar', 'Ooop', 'Bok', 'Shan', 'Pharm', 'Chitty-'];
const secondSyllables = ['tek', 'enchi', 'noo', ' bat', 'el', 'ma', 'la', 'ta', 'ete', ' ', '-', 'mo', 'let', 'im', 'labra', 'parma', 'Chitty'];
const thirdSyllables = [' ', 'lada', 'loodle', 'poppadun', 'toot', 'poot', 'zoot', 'telen', 'lata', 'bootie', ', Jr.', ', III', ', Sr.', 'ladle', 'ibble', 'doodle', 'Bang-Bang'];

const randomSelector = array => {
    let i = Math.floor(Math.random()*(array.length))
    return array[i];
}

let firstPart = randomSelector(firstSyllables);
let secondPart = randomSelector(secondSyllables);
let thirdPart = randomSelector(thirdSyllables);

console.log(`Your alien name is: ${firstPart}${secondPart}${thirdPart}`);