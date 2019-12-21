let a = parseInt(prompt('Enter a'));
let b = parseInt(prompt('Enter b'));
let c = parseInt(prompt('Enter c'));

if (isNaN(a) || isNaN(b) || isNaN(c) || a === '' || b === '' || c === '') {
    alert('input values should be ONLY numbers');
} else {

    if (a <= 0 || b <= 0 || c <= 0) {
        alert('A triangle must have 3 sides with a positive definite length');
    } else {

        if (a + b <= c || a + c <= b || b + c <= a) {
            alert('Triangle doesn’t exist');
        } else {
            if (a === b && b === c && c === a) {
                alert('Equilateral triangle');
            } else {

                if (a === b || b === c || c === a) {
                    alert('Isosceles triangle');
                } else {
                    alert('Scalene triangle');
                }
            }
        }
    }
}