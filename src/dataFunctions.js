// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterData = (data, filterBy, value) => {
  let resultadoFiltro = []

resultadoFiltro= data.filter((Element)=>{
  return Element.facts[filterBy] == value

})

return resultadoFiltro;
};

export const anotherExample = () => {
  return [];
};
