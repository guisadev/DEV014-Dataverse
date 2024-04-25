export const renderItems = (data) => {
  const newUl = document.createElement("ul");

  data.forEach(element => {
    //por cada elemento de informacion del objeto :data
    const newLi = document.createElement("li"); //un elemento li por cada elemento en data

    const newImage = document.createElement("img"); //un elemento img para mostrar la imagen
    newImage.setAttribute("src", element.imageUrl); //utilizamos la url de la imagen del doc actual
    
    const name = document.createElement("dt")
    name.textContent = ""
    const cafeName = document.createElement("dd")
    cafeName.textContent = element.name; //añadimos el nombre al elemento actual
    cafeName.classList.add("cafe-name");

    const shortDescription = document.createElement("dt");
    shortDescription.textContent = "Descripción:"    
    const cafeDescription = document.createElement("dd");
    cafeDescription.textContent = element.shortDescription;

    //Creamos una lista para los hechos de cada café
    const origen = document.createElement("dt");
    origen.textContent = "Café origen:";
    const cafeOrigen = document.createElement("dd")
    cafeOrigen.textContent = element.facts.origen

    const tiempoDeExtraccion = document.createElement("dt")
    tiempoDeExtraccion.textContent = "Tiempo de extracción:";
    const cafeTiempoDeExtraccion = document.createElement("dd");
    cafeTiempoDeExtraccion.textContent = element.facts.tiempoDeExtraccion

    const PorcentajeDeContenido = document.createElement("dt");
    PorcentajeDeContenido.textContent = "Porcentaje de contenido:";
    const cafePorcentajeDeContenido = document.createElement("dd");
    cafePorcentajeDeContenido.textContent = element.facts.PorcentajeDeContenido;


    newLi.append(newImage, name, cafeName, shortDescription, cafeDescription, origen, cafeOrigen, tiempoDeExtraccion, cafeTiempoDeExtraccion, PorcentajeDeContenido, cafePorcentajeDeContenido);
    newUl.appendChild(newLi)
    
  });
  //console.log(data)
  //   Aquí comienza tu código y puedes retornar lo que tu necesites
  return newUl;// debe retornar solo newUl 

};

