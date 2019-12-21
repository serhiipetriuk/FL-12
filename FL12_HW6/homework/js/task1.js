let a = prompt('Enter a');
let b = prompt('Enter b');
let c = prompt('Enter c');

if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
    console.log('Invalid input data');
}

const two = 2;
const four = 4;

let D = b * b - four * a * c;

if (D < 0) {
    console.log('no solution');
} else if (D === 0) {
    console.log('x = ', Math.round(-b / two * a));
} else {
    console.log('x1 = ', Math.round((-b + Math.sqrt(D)) / two * a));
    console.log('x2 = ', Math.round((-b - Math.sqrt(D)) / two * a));
}