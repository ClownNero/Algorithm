function solution(array) {
  const obj = {};
  array.forEach((number) => {
    if (!obj[number]) {
      obj[number] = 1;
    } else {
      obj[number] += 1;
    }
  });

  let highestValue = 0;
  let highestValueKey = -Infinity;

  for (let key in obj) {
    const value = obj[key];
    if (value > highestValue) {
      highestValue = value;
      highestValueKey = Number(key);
    }
  }

  const maximum = Math.max(...Object.values(obj));

  const mode = Object.keys(obj).filter((key) => obj[key] === maximum);

  return mode.length === 1 ? highestValueKey : -1;
}