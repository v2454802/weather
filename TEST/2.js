function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
}

console.log(feast('great blue heron', 'garlic naan'));

function moveTen(s) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase();
  return s.split()
    .map((el) => {
      if ((alphabet.length - (alphabet.indexOf(el) + 10)) > 0) {
        el = alphabet[(alphabet.indexOf(el) + 10)];
      } else {
        el = alphabet[(alphabet.indexOf(el) - 16)];
      }
    })
    .join('');
}

function getMissingNumbers(arr) {
  const arr1 = [];
  for (let i = 1; i <= arr.length; i += 1) {
    if (!arr.includes(i)) arr1.push(i);
  }
  return arr1;
}

console.log(getMissingNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // [5,6]
console.log(getMissingNumbers([1, 1])); // [2]
console.log(getMissingNumbers([1, 2])); // []

const obj = {
  1: 1,
  2: 2,
  3: {
    4: 4,
    5: {
      6: 6
    }
  }
};
const strObj = JSON.stringify(obj);

const pObj = JSON.parse(strObj, (key, value) => {
  if (key === '') {
    return value;
  }

  if (typeof value === 'number') {
    return value * 2;
  }

  return value;
});

console.log(pObj);
