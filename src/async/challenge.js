import fetch from 'node-fetch';                 // configuracion
const API = 'https://api.escuelajs.co/api/v1';   

async function fetchData(urlApi) {          // funcion async 
  const response = await fetch(urlApi);     // llamamos la api
  const data =  await response.json();      // transformamos el archivo a .json
  return data;
}

const anotherFunction = async (urlApi) => {     // construimos la funcion para utilizar try y catch
  try {
    const products = await fetchData(`${urlApi}/products`);
    const product = await fetchData(`${urlApi}/products/${products[0].id}`);
    const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

    console.log(products);
    console.log(product.title);
    console.log(category.name);

  } catch (error) {
    console.error(error);
  }
}

anotherFunction(API);    // llamamos la funcion 