function pipe (number, ...args) {
    for (let i = 0; i < args.length; i++) {
        number = args[i](number);
    }
    return number;
}

function addOne(x) {
    return x+1;   
}

console.log(pipe(1, addOne, addOne, addOne));
