//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';
import { filterData } from './dataFunctions.js';
import { sortData } from './dataFunctions.js';
// cree cafes como respaldo de la data y poder jugar y moverla sin romper nada 
// ... spread sirve para hacer un "clon" que cree una referencia de lo que es el data
let cafes = [...data]

const root = document.getElementById("root"); //crear una const root para asignarle el documento 

root.appendChild(renderItems(data));

//console.log(filterData(data, 'origen', 'Italia')) 

const selectPais = document.querySelector('select[name="FiltradoPaís"]')
console.log(selectPais)
selectPais.addEventListener("input", () => {
  console.log(selectPais.value)
  const paisSeleccionado = selectPais.value
  if (paisSeleccionado === "TODOS") {
    cafes = data
    root.textContent = ""
    root.appendChild(renderItems(cafes));
  }
  else {
    cafes = filterData(data, "origen", paisSeleccionado)
    root.textContent = ""
    root.appendChild(renderItems(cafes));
    console.log("else")
  }



})
console.log()

const selectOrden = document.querySelector('select[name="ordenAsc-Desc"]')
selectOrden.addEventListener("input", () => {
  const ordenSeleccionado = selectOrden.value
  let dataOrdenada
  if (ordenSeleccionado === "asc") {
    dataOrdenada = sortData(cafes, "name", true)
  } else {
    dataOrdenada = sortData(cafes, "name", false)

  }
  root.textContent = ""
  root.appendChild(renderItems(dataOrdenada))
}
)

const botonLimpiar = document.querySelector('button[name="Limpiar-Filtros"]')
console.log(botonLimpiar)
botonLimpiar.addEventListener("click", () => {
  selectPais.value = "TODOS"
  selectOrden.value = "default"
  console.log(data)
  cafes = data
  root.textContent = ""
  root.appendChild(renderItems(cafes));
})


//  ir a buscar el elemento(select) con la función querySelector 
// añadir un listener al elemento anterior (input)
// en la funcion que gatilla el listener se va a capturar el país seleccionado por el usuario 
// llamar a la función filterData, vamos a pasarle el valor que capturamos anteriormente 
// el resultado se guardara en una variable
// luego vamos a limpiar el root 
// renderizar la data filtrada y pasarla al root con el appendChild 


