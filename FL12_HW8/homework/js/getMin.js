function getMin() {
  let res= Infinity;
  for(let i in arguments) {
    if(arguments[i] < res) {
      res = arguments[i];
    }
  }
  return res;
}

console.log(getMin(1, 10, 100, 1000, -1, -10, -100, -1000));