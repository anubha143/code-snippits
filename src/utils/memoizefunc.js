const memoize = (func) => {
  const cache = new Map(); //making a closure here so that inner func can access value of cache
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log("cached result");
      return cache.get(key);
    }
    const result = func(...args);
    cache.set(key, result);
    console.log("calculating sum");
    return result;
  };
};

const sum = (...args) => {
  return args.reduce((acc, curr) => acc + curr, 0);
};

const memoizedSum = memoize(sum);
console.log(memoizedSum(1, 2, 3));
console.log(memoizedSum(4, 5, 6));
console.log(memoizedSum(1, 2, 3));
console.log(memoizedSum(4, 5, 6));
