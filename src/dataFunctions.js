// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterData = (data, filterBy, value) => {
  let resultadoFiltro = []

  resultadoFiltro= data.filter((Element)=>{
    return Element.facts[filterBy] === value

  })

  return resultadoFiltro;
};


export const sortData = (data=[], filterBy, asc) => {
  const retornoOrdenado = data.sort((a, b) =>{
    //"".toUpperCase(), para colocar un string todo mayuscula, ej abc => ABC 
    if (asc){
      if (a[filterBy].toUpperCase()>= b[filterBy].toUpperCase()){
        return 1;
      }
      else {
        return -1
      }

    }
    else {
      if (a[filterBy].toUpperCase()<= b[filterBy].toUpperCase()){
        return 1;
      }
      else {
        return -1
      }

    }

  }) // a - b ascendente, - a + 
  return retornoOrdenado; 
};
