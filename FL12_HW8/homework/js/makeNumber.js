function makeNumber(string) {
    let stringArray= string.split('');
    let numberArray = [];
    for (let i = 0; i < stringArray.length; i++) {
        if(!isNaN(stringArray[i])) {
            numberArray.push(stringArray[i]);
        }
    }
    return numberArray.join('');
}

console.log(makeNumber('iohjd89yh4958h973gtr8373rg4'));