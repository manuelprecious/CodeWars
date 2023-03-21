function* generator(a, b) {
  for (let i = a; i <= b; i++) {
    let initialVal = 1;
    while(initialVal <= 10){
        yield `${i} x ${initialVal} = ${i * initialVal}`
        initialVal++;
    }
  }
};

const generatorObject = generator(1, 3);

for(const value of generatorObject){
    console.log(value);
}