function fn(n) {
  if (n === 0) return 0;
  if (n % 15 === 0) {
    return n + fn(n - 1);
  }
  return fn(n - 1);
}

const d = fn(100);
console.log(d);
