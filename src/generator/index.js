function* generador() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generador();
console.log(gen.next().value)   // ejecuta el primer valor
console.log(gen.next().value)   // ejecuta el segundo valor
console.log(gen.next().value)   // ejecuta el tercer valor

// ejemplo 2 con array

function* iterate(array) {
    for (let value of array) {
      yield value
    }
  }
  
  const it = iterate(['oscar', 'omar', 'ana', 'lucia', 'juan']);
  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().value);