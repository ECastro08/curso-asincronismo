const fnAsync = () => {                         // creamos la funcion con la logica de la promesa y se va ejecutar dependiendo el tiempo del setTimeout
    return new Promise((resolve, reject) => {    
      (true)
        ? setTimeout(() => resolve('Async!!'), 2000)
        : reject(new Error('Error!'));
    });
  }
  
  const anotherFn = async () => {             // creamos la funcion para llamar la funcion asyn y poder utilizar el await 
    const somethig = await fnAsync();        // el await va hacer que se ejecuten las demas tareas y luego hacer la de la funcion
    console.log(somethig);
    console.log('Hello!');
  }
  
  console.log('Before');
  anotherFn();                   // llamamos la funcion pero se ejecutara desoues de 2s por ende before y after se mostraran de primeros
  console.log('After');