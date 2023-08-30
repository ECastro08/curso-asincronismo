// CALLBACKS 
// creamos la funcion la cual vamos a llamar mas adelante
function sum(num1, num2) {
    return num1 + num2;
  }
  
  function calc(num1, num2, sumNumbers) {
    return sumNumbers(num1, num2);
  };
  
  console.log(calc(2, 2, sum));

  // ejemplo con setTimeout en una funcion anonima
  
  setTimeout(function () {
    console.log('Hola JavaScript');
  }, 5000)
  
  // ejemplo con setTimeout y una funcion de saludo 

  function gretting(name) {
    console.log(`Hola ${name}`);
  }
  
  setTimeout(gretting, 2000, 'Oscar');


  // Reto platzi

function execCallback(callback) {
    return console.log((callback, 'funcion callback'));
  }
  
  setTimeout(execCallback, 2000, 'Hecho');

//  otro ejemplo

function saludar(nombre) {
  alert('Hola ' + nombre);
}

function procesarEntradaUsuario(callback) {
  var nombre = prompt('Por favor ingresa tu nombre.');
  callback(nombre);
}

procesarEntradaUsuario(saludar);

