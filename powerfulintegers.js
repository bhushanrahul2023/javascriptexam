function powerfulIntegers(x, y, bound) {
  const result = new Set();
  let i = 0;
  while (Math.pow(x, i) < bound) {
    let j = 0;
    while (Math.pow(x, i) + Math.pow(y, j) <= bound) {
      result.add(Math.pow(x, i) + Math.pow(y, j));
      j++;
      if (y === 1) break; 
    }
    i++;
    if (x === 1) break; 
  }
  return [...result];
}