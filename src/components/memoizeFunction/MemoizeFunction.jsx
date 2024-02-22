function memoize(fn) {
  const res = {};
  return function (...args) {
    let argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn(...args);
    }
    return res[argsCache];
  };
}

const clumsyProduct = (num1, num2) => {
  for (let i = 1; i <= 100000; i++) {}
  return num1 * num2;
};

const memoizedClumsyProduct = memoize(clumsyProduct);

console.time("first call");
console.log(clumsyProduct(23, 6555));
console.timeEnd("first call");

console.time("second call");
console.log(memoizedClumsyProduct(23, 6555));
console.timeEnd("second call");
