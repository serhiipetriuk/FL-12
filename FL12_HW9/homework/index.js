function convert(...input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        input[i] === +input[i] ? result.push(input[i] += '') : result.push(+input[i]);
    }
    return result;
}

function executeforEach(array, func) {
    for (const i of array) {
        func(i);
    }
}

function mapArray(array, func) {
    let result = [];
    executeforEach(array, element => result.push(func(+element)));
    return result;
}

function filterArray(array, filter) {
    let result = [];
    executeforEach(array, element => filter(element) ? result.push(element) : 0);
    return result;
}

function flipOver(str) {
    let result = '';
    for (let i = str.length-1; i >= 0; i--) {
        result += str.charAt(i);
    }
    return result;
}

function makeListFromRange(range) {
    let array = [];
    for (let i = range[0]; i <= range[1]; i++) {
        array.push(i);
    }
    return array;
}

function getArrayOfKeys(array, key) {
    let result = [];
    executeforEach(array, object => result.push(object[key]));
    return result;
}

function substitute(array) {
    const num = 30;
    return mapArray(array, element => element < num ? '*' : element);
}

function getPastDay(date, dayBefore) {
    // eslint-disable-next-line no-magic-numbers
    const day = 1000*60*60*24;
    return new Date(date.getTime() - dayBefore * day).getDate();
}

function formatDate(date) {
   return date.toLocaleString('uk-Ua');
}


console.log(convert('1', 2, 3, '4'));

executeforEach([1, 2, 3], function (el) {
    console.log(el * 2)
});

console.log(mapArray([2, '5', 8], function (el) {
    return el + 3
}));

console.log(filterArray([2, 5, 8], function (el) {
    return el % 2 === 0
}));

console.log(flipOver('hey world'));

console.log(makeListFromRange([2, 7]));

const actors=[{name:'tommy',age:36},{name:'lee',age:28}];
console.log(getArrayOfKeys(actors,'name'));

console.log(substitute([58, 14, 48, 2, 31, 29]));

const date = new Date(2019, 0, 2);
console.log(getPastDay(date, 1));
console.log(getPastDay(date, 2));
console.log(getPastDay(date, 365));

console.log(formatDate(new Date('6/15/2018 09:15:00')));

console.log(formatDate(new Date()));


