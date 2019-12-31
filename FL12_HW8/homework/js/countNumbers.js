function countNumbers(string) {     
    let stringArray= string.split('');
    let map = new Map();
    for (let i = 0; i < stringArray.length; i++) {
        if(!isNaN(stringArray[i])) {
            map.set(stringArray[i], (map.get(stringArray[i]) || 0) + 1);
        }
    }
    return map;
}

console.log(countNumbers('jdjjka000466588kkkfs662555'));
