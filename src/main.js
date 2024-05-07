
import { renderItems, createSelect, createSelectSort } from './view.js';
import data from './data/dataset.js';
import { sortData } from './dataFunctions.js';

const root = document.getElementById("root");
const nav = document.getElementById("nav");
const botonLimpiar = document.getElementById("botonLimpiar"); //Obtener referencia al botón de limpiar
// Crear el select origen y agregarlo al DOM
const selectOrderByOrigen = createSelect(data, 'origen'); //mas descriptivas las constantes
nav.appendChild(selectOrderByOrigen);

// Crear el select molienda y agregarlo al DOM
const selectOrderByMolienda = createSelect(data, 'molienda');
nav.appendChild(selectOrderByMolienda);

//crear el select ordenado y agregarlo al DOM
//const select3 = createSelect(data, 'name');
//root.appendChild(select3);
const selectOrderByPropertyName = createSelectSort(data, 'name');
nav.appendChild(selectOrderByPropertyName);
const propertyName = 'name';

// Agregar un evento de clic al botón
botonLimpiar.addEventListener("click", limpiarFiltros);
// Función para limpiar los filtros
function limpiarFiltros() {
  // Limpiar los filtros aplicados
  document.getElementById("filtro").innerHTML = "";
}
// Agregar un event listener para el evento change // para el select de ordenar
selectOrderByPropertyName.addEventListener("change", (event) => {
  const sortOrder = event.target.value;
  // Llamar a la función para ordenar la data y renderizar los elementos
  if (sortOrder) {
    const sortedData = sortData(data, propertyName, sortOrder);
    root.appendChild(renderItems(sortedData));
  }
});
// Agregar event listener al select
selectOrderByOrigen.addEventListener("change", (event) => {
  const selectedValue = event.target.value;
  // Aquí puedes realizar acciones basadas en el valor seleccionado
  //console.log("Valor seleccionado:", selectedValue);
  // Luego, puedes llamar a renderItems nuevamente con el origen filtrado
  root.appendChild(renderItems(data, selectedValue, 'origen'));
});

selectOrderByMolienda.addEventListener("change", (event) => {
  const selectedValue = event.target.value;
  // Aquí puedes realizar acciones basadas en el valor seleccionado
  //console.log("Valor seleccionado:", selectedValue);
  // Luego, puedes llamar a renderItems nuevamente con el origen filtrado
  root.appendChild(renderItems(data, selectedValue, 'molienda'));
});
// Renderizar los elementos por primera vez sin filtro
root.appendChild(renderItems(data));
