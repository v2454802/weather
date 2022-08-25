function* generatorOne() {
  yield ['a', 'b', 'c'];
}

function* generatorTwo() {
  yield*['a', 'b', 'c'];
}

const one = generatorOne();
const two = generatorTwo();

console.log(one.next().value);
console.log(two.next().value);

console.log(typeof null);

const arrFunc = [];
for (let i = 0; i < 5; i++) {
  arrFunc.push(() => i);
}
//console.log(i, '=='); // 5

for (let i = 0; i < arrFunc.length; i++) {
  console.log(arrFunc[i]()); // все 5
}


let lastWords = `
    I
    am
    Iron Man
`
console.log(lastWords);
