//Aquí voy a filtrar de la data un facts que quiero facilitar:
export const filterData = (data, filterBy, value) => {
  if (!value) {
    return data;
  }

  // console.log('filtrado por', filterBy);
  return data.filter((bebida) => bebida.facts[filterBy].toLowerCase() === value.toLowerCase());
};

export const sortData = (data, propertyName, sortOrder) => {
  return data.slice().sort((a, b) => { //se crea una copia superficial para analizar según el valor de sortOrder
    //const nameA = a[propertyName].toUpperCase();
    const nameA =
      typeof a[propertyName] === "string" ? a[propertyName].toUpperCase() : "";
    const nameB =
      typeof b[propertyName] === "string" ? b[propertyName].toUpperCase() : "";
    //const nameB = b[propertyName].toUpperCase();
    if (sortOrder === "asc") {
      return nameA.localeCompare(nameB);
    } else if (sortOrder === "desc") {
      return nameB.localeCompare(nameA);
    }
    return 0;
  });
};
