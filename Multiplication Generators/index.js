/*
        Multiplication - Generators #2

        Generators can be used to make wonderful things. You can use them for numerous things,
        but here is one specific example. You are studying for a test so you must practice your 
        multiplication, but you don't have a multiplication table showing the different examples.
        You have decided to create a generator that prints out a limitless list of time tables.


        Task:

        Your Generator must take one parameter `a` then everytime the generator is called you 
        must return a string in the format of: `'a x b = c'` where c is the answer. Also, the value
        of `b`, which starts at 1, must increment by 1 each time!
 */

function* generator(a) {
  let incrementCount = 1;
  while (incrementCount <= 10) {
    yield `${a} x ${incrementCount} = ${a * incrementCount}`;
    incrementCount++;
  }
}

const generatorObject = generator(1);

for (const value of generatorObject) {
  console.log(value);
}
