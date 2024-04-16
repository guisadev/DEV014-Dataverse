export const renderItems = (data) => {
  const newUl = document.createElement("ul");

  data.forEach(element => {
    //console.log(element)
    const newLi = document.createElement("li"); //un elemento li por cada elemento en data
    const newImage = document.createElement("img"); //un elemento img para mostrar la imagen
    
    newImage.setAttribute("src", element.imageUrl); //utilizamos la url de la imagen del doc actual
    newLi.appendChild(newImage);

    const shortDescription = document.createElement("span");
    shortDescription.textContent = element.shortDescription;
    

    const cafeName = document.createElement("h5")
    cafeName.textContent = element.name; //añadimos el nombre al elemento actual

    const cafeDescription = document.createElement("p");
    cafeDescription.textContent = element.description;
    //Creamos una lista para los hechos de cada café
    const factsList = document.createElement('ul');
    // Ordenamos manualmente los hechos en el orden deseado
    const orderedFacts = {
      "Origen": element.facts.origen,
      "Tiempo de Extracción": element.facts.tiempoDeExtraccion,
      "Molienda": element.facts.molienda,
      "Contenido": element.facts.contenido
    };

    // Recorremos los hechos ordenados y creamos un elemento <li> para cada hecho
    for (const [factName, factValue] of Object.entries(orderedFacts)) {
      if (factValue) {
        const factItem = document.createElement('li');
        factItem.textContent = `${factName}: ${factValue}`;
        factsList.appendChild(factItem);
      }
    }
    newLi.appendChild(cafeName);
    newLi.appendChild(shortDescription);
    newLi.appendChild(cafeDescription);
    newUl.appendChild(newLi);
    newLi.appendChild(factsList);
    
  });
  document.body.appendChild(newUl)
  //console.log(data)
  //   Aquí comienza tu código y puedes retornar lo que tu necesites
  return newUl;// debe retornar solo newUl 

};

