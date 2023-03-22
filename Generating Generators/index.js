// My solution

function* generatedGenerator(params1) {
  let incrementCount = 1;
  while (incrementCount <= 10) {
    yield `${params1} x ${incrementCount} = ${params1 * incrementCount}`;
    incrementCount++;
  }
}

function* generator(a, b) {
  for (let i = a; i <= b; i++) {
    yield generatedGenerator(i);
  }
}



// // Solution 1;
// function* generator(a, b) {
//   for (let i = a; i <= b; i++)
//     yield (function* () {
//       for (let j = 1, k = i; j <= 10; j++, k += i) yield `${i} x ${j} = ${k}`;
//     })();
// }

// const generatorOject = generator(1, 3);

// for (const value of generatorOject) {
//   console.log(value);
// }

// // Solution 2
// function* multiplicationGenerator(n) {
//   for (let i = 1; i <= 10; i++) {
//     yield `${n} x ${i} = ${n * i}`;
//   }
// }

// function* generator(a, b) {
//   for (let i = a; i <= b; i++) {
//     yield multiplicationGenerator(i);
//   }
// }

// // Solution 3
// function* generator(a, b) {
//   const gen = function* () {
//     for (let j = 1; j < 11; ++j) yield `${a} x ${j} = ${a * j}`;
//   };

//   while (a <= b) yield gen(), ++a;
// }

// // Solution 4
// function* generator(a, b) {
//   while (a <= b) {
//     yield generateStr(a++);
//   }
// }

// function* generateStr(a) {
//   for (let i = 1; i <= 10; i++) {
//     yield `${a} x ${i} = ${a * i}`;
//   }
//   return `${a} x ${10} = ${a * 10}`;
// }

// const generatedGenerator = function* (params1, params2) {

//   let incrementCounter = 1;
//   let step = params1;

//   while (incrementCounter <= 10) {
//     yield `${params1} x ${incrementCounter} = ${params1 * incrementCounter}`;
//     incrementCounter++;
//   }
//   step++;
// };

// // const generatedGeneratorObject = generatedGenerator(1, 3)

// const generator = function* (a, b) {
//   yield generatedGenerator(a, b);
// };

// const generatedGeneratorObject = generator(1, 2);

// for (const value of generatedGeneratorObject) {
//   console.log(value);
// }


