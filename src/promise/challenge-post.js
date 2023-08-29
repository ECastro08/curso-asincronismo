// importa para poder usar el metodo fecth y se agrega la const api donde esta la url del api
import fetch from 'node-fetch';
const API='https://api.escuelajs.co/api/v1';

function postData(urlApi,data) { // se crea la funcion para la configutacion del envio de datos al api
const response=fetch(urlApi, {
    method:'POST',
    mode:'cors',
    credentials:'same-origin',
    headers:{
        'Content-Type':'application/json'},
        body:JSON.stringify(data)});
return response;
}
const data={            // se crea el producto segun los elementos del api
    "title":"212",
    "price":212,
    "description":
    "A description",
    "categoryId":1,
    "images":["https://placeimg.com/640/480/any"]
    }

postData(`${API}/products`, data)  // llamamos a la funcion y le pasamos los argumentos api y data
.then(response => response.json())  // convertimos el archivo a json 
.then(data => console.log(data));   // miramos en consola los datos creados en data