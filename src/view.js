export const renderItems = (data) => {
  const newUl = document.createElement("ul");

  data.forEach(element => {
    //console.log(element)
    const newLi = document.createElement("li"); //un elemento li por cada elemento en data

    const newImage = document.createElement("img"); //un elemento img para mostrar la imagen
    newImage.setAttribute("src", element.imageUrl); //utilizamos la url de la imagen del doc actual
    
    const name = document.createElement("dt")
    name.textContent = "Nombre:"
    const cafeName = document.createElement("dd")
    cafeName.textContent = element.name; //añadimos el nombre al elemento actual

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

    const contenido = document.createElement("dt");
    contenido.textContent = "Contenido:";
    const cafeContenido = document.createElement("dd");
    cafeContenido.textContent = element.facts.contenido;


    newLi.append(newImage, name, cafeName, shortDescription, cafeDescription, origen, cafeOrigen, tiempoDeExtraccion, cafeTiempoDeExtraccion, contenido, cafeContenido);
    newUl.appendChild(newLi)
    
  });
  //console.log(data)
  //   Aquí comienza tu código y puedes retornar lo que tu necesites
  return newUl;// debe retornar solo newUl 

};

