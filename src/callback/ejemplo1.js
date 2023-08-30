function primero() {
    setTimeout(function() {    // se ejecuta con una demora de 3 segundos
        console.log("soy primero");
    }, 3000)
}
function segundo() {
    console.log("soy segundo");
}
primero();
segundo();
// se ejecuta la segunda funcion y luego la primera

// Solucionando con callback para que se ejecuten en orden

function primero(segundo) {
    setTimeout(function() {    // se ejecuta con una demora de 3 segundos
        console.log("soy primero");
        segundo();
    }, 3000)
}
function segundo() {
    console.log("soy segundo");
}
primero(segundo);
