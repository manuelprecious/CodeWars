
function* sequenceGen(...args) {
  yield* args;

  let trackingArray = [...args];

  while (true) {
    let changingVariable = trackingArray.reduce(
      (accumulator, initialValue) => (accumulator += initialValue),
      0
    );
    trackingArray.push(changingVariable);
    trackingArray.shift();
    yield changingVariable;
  }
}

const generatorObject = sequenceGen(4, 4, 5, 2, 1);

let result = generatorObject.next();

console.log(result.value);
for (const value of generatorObject) {
  console.log(value);
}
