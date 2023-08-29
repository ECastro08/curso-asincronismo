// estructura de una promesa
const promise = new Promise(function (resolve, reject) {
    resolve('hey!')
  });
  
// ejemplo con vacas en una granja si cows > 10 resolve o cows < 10 reject
  
  const cows = 15;
  
  const countCows = new Promise(function (resolve, reject) {
    if (cows > 10) {
      resolve(`We have ${cows} cows on the farm`);
    } else {
      reject("There is no cows on the farm");
    }
  });
  
  countCows.then((result) => {    // then para obtener el resolve
    console.log(result);
  }).catch((error) => {           // catch para obtener el error
    console.log(error);
  }).finally(() => console.log('Finally'));   // finally para que muestre que finalizo la promesa

// Reto Platzi

function delay(time, message) {
    return new Promise((resolve, reject) =>{
        window.setTimeout(() => {
         resolve (message);
        }, time);
        
     });
 }

  

  
