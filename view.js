import { filterData } from "./dataFunctions.js";

// creo el select
export const createSelect = (data, propertyName) => {
  // Obtener todos los valores únicos de la propiedad especificada en los datos
  const propertyValues = data.map((item) => item.facts[propertyName]);

  // Eliminar valores duplicados usando un conjunto (Set)
  // eslint-disable-next-line no-undef
  const uniqueValues = new Set(propertyValues);
  const span = document.createElement("span")
  const label = document.createElement("label");
  label.setAttribute("for", propertyName)

  const select = document.createElement("select");
  select.setAttribute("id", propertyName)
  select.setAttribute("name", propertyName)
  select.setAttribute("class", "select-style")
 
  // Agregar una opción adicional al principio del select que no esté seleccionada
  const defaultOption = document.createElement("option");
  defaultOption.value = ""; // Valor vacío
  defaultOption.textContent = `Seleccione ${propertyName} (sin filtro)`; // Texto descriptivo
  //defaultOption.disabled = true; // Deshabilitar la opción para que no se pueda seleccionar
  //defaultOption.selected = true; // No seleccionar la opción por defecto
  select.appendChild(defaultOption);

  // Agregar una clase al select
  select.classList.add("select-style");
  // Agregar una opción por cada valor único de la propiedad
  uniqueValues.forEach((value) => {
    const optionElement = document.createElement("option");
    optionElement.value = value;
    optionElement.textContent = value;
    select.appendChild(optionElement);
  });
  span.append(label, select)
  return span;
};
// Crear el selectSort
export const createSelectSort = (data, propertyName) => {
  const select = document.createElement("select");

  // Agregar una opción adicional al principio del select que no esté seleccionada
  const defaultOption = document.createElement("option");
  defaultOption.value = ""; // Valor vacío
  defaultOption.textContent = `Categoría ${propertyName} (sin filtro)`; // Texto descriptivo
  //defaultOption.disabled = true; // Deshabilitar la opción para que no se pueda seleccionar
  //defaultOption.selected = true; // No seleccionar la opción por defecto
  select.appendChild(defaultOption);

  // Agregar opciones para orden ascendente y descendente
  const ascendingOption = document.createElement("option");
  ascendingOption.value = "asc";
  ascendingOption.textContent = "Ordenar ascendente";
  select.appendChild(ascendingOption);

  const descendingOption = document.createElement("option");
  descendingOption.value = "desc";
  descendingOption.textContent = "Ordenar descendente";
  select.appendChild(descendingOption);

  return select;
};

export const renderItems = (data, value = null, filterBy=null) => {
  // Eliminar la lista ul existente del DOM si existe
  const existingUl = document.querySelector("ul");
  if (existingUl) {
    existingUl.parentNode.removeChild(existingUl);
  }

  const newUl = document.createElement("ul");
  
  
  // Filtrar los datos según el origen especificado si existe
  const filteredData = value ? filterData(data,filterBy, value) : data;

  filteredData.forEach((element) => {
    //console.log(element)
    const newLi = document.createElement("li"); //un elemento li por cada elemento en data
    newLi.setAttribute("itemscope", "")
    newLi.setAttribute("itemType", element.id)

    const newImage = document.createElement("img"); //un elemento img para mostrar la imagen
    newImage.setAttribute("src", element.imageUrl); //utilizamos la url de la imagen del doc actual

    const name = document.createElement("dt");
    name.textContent = "Nombre:";
    const cafeName = document.createElement("dd");
    cafeName.textContent = element.name; //añadimos el nombre al elemento actual

    const shortDescription = document.createElement("dt");
    shortDescription.textContent = "Descripción:";
    const cafeDescription = document.createElement("dd");
    cafeDescription.textContent = element.shortDescription;

    //Creamos una lista para los hechos de cada café
    const origen = document.createElement("dt");
    origen.textContent = "Café origen:";
    const cafeOrigen = document.createElement("dd");
    cafeOrigen.textContent = element.facts.origen;

    const tiempoDeExtraccion = document.createElement("dt");
    tiempoDeExtraccion.textContent = "Tiempo de extracción:";
    const cafeTiempoDeExtraccion = document.createElement("dd");
    cafeTiempoDeExtraccion.textContent = element.facts.tiempoDeExtraccion;

    const porcentajeDeContenido = document.createElement("dt");
    porcentajeDeContenido.textContent = "Porcentaje de contenido:";
    const cafePorcentajeDeContenido = document.createElement("dd");
    cafePorcentajeDeContenido.textContent = element.facts.porcentajeDeContenido;

    const molienda = document.createElement("dt");
    molienda.textContent = "Molienda:";
    const cafeMolienda = document.createElement("dd");
    cafeMolienda.textContent = element.facts.molienda;


    newLi.append(
      cafeName,
      newImage,
      shortDescription,
      cafeDescription,
      origen,
      cafeOrigen,
      molienda,
      cafeMolienda,
      porcentajeDeContenido,
      cafePorcentajeDeContenido,

    );
    newUl.appendChild(newLi);
  });
  // Agregar la nueva lista al body
  // Agregar el select al contenedor div

  //document.body.appendChild(newUl);
  return newUl
};