// С бекенда приходит массив такого вида:
const arr = [{
    name: 'width',
    value: 10,
  },
  {
    name: 'height',
    value: 20,
  },
  // ...
];

// Нужно получить объект такого вида:
/*
{
width: 10,
height: 20,
...
}
*/
function obj(arr) {
  const newObj = {};
  arr.forEach((element) => {
    newObj[element.name] = element.value;
  });
  console.log(newObj);
}
obj(arr);

//---------------------------------------------------


/*     2       */

/**
 * Есть функция и объект. Необходимо, чтобы функция в консоли вывела значение 'yandex'.
 * Как добиться желаемого, не изменяя тело функции?
 */
function f(a, b) {
  console.log(this.x);
}
var obj = {
  x: 'yandex'
};

f.call(obj)
//---------------------------------------------------


function Product(name, price) {
  this.name = name;
  this.price = price;

  if (price < 0) {
    throw RangeError('Нельзя создать продукт ' +
      this.name + ' с отрицательной ценой');
  }
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'еда';
}

Food.prototype = Object.create(Product.prototype);

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'игрушка';
}

Toy.prototype = Object.create(Product.prototype);

var cheese = new Food('фета', 5);
var fun = new Toy('робот', 40);

console.log(cheese, fun);

new Promise(resolve => {
    console.log('0')
    resolve(11)
    console.log('1')
    resolve(22)
    console.log('2')
  })
  .then(console.log)


/* Написать функцию, которая может запоминать результат своего выполнения и отдавать его в течение заданного времени. */
/*НАПРИМЕР:*/
function getData() {
  return new Promise(resolve => {
    setTimeout(() => resolve(42), 1000)
  })
}

let memoized = memorize(getData, 1000);

// memoized()
//   .then(data1 => console.log(data1 + '1')) // получаем долго
//   .then(memoized)
//   .then(data2 => console.log(data2 + '2')) // получаем быстро, из кеша
//   .then(memoized)
//   .then(data3 => console.log(data3 + '3')); // получаем быстро, из кеша

/*  РЕШЕНИЕ
Функция memorize принимает на вход функцию, отдающую промис, под названием getData и промежуток времени.
Задаём переменную result для записи результата. При первом вызове getData переменная result заполнится результатом её выполнения - зарезолвленным промисом.
Задаём переменные для фиксации времени.

Если в результате что-то лежит и время ещё не прошло, возвращаем зарезолвлоенный result.
В противном случае, вызываем функцию getData, записываем рез-т её вызова в result и начинаем отсчёт времени.
*/


function memorize(cb, time) {
  let result;
  let start;
  let end;
  return () => {
    end = Date.now()
    if (result && end - start < time) {
      return new Promise((res, rej) => res(result))
    } else {
      return cb().then(res => {
        result = res
        start = Date.now()
      })
    }
  }
}

/*     1       */

/**
 * Нужно написать функцию, которая принимает число N и возвращает функцию,
 * вызов которой первые N раз возвращает 'yes', а потом – 'no'.
 */
function canGetCount(n) {
  let count = 0;
  return () => {
    if (count < n) {
      count++
      return "yes"
    } else {
      return "no"
    }
  }
}

const getOne = canGetCount(2);

getOne() === 'yes'
getOne() === 'yes'
getOne() === 'no'


const getOne1 = canGetCount(3);

/**
 * Что будет в консоли?
 */
(function () {
  function foo() {
    for (i = 0; i < 3; i++) {
      console.log(i);
    }
  }

  for (i = 0; i < 3; i++) {
    foo();
  }
})()

/**
 * ОТВЕТ:
 * 012
 * Значение i в обоих циклах всплывает в глобальную область видимости. Сначала 3 раза срабатывает вызов foo
 * и, соответственно, верхний цикл. К тому моменту, как цикл отработал значение i = 2. Когда из-за нижнего
 * цикла оно переключается на 3, цикл завершается, а вместе с ним и функция.
 */
