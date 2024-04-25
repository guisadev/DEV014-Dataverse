// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

//export const example = () => {
// return 'example';
//};

//export const anotherExample = () => {
// return [];
//};

export const filterData = (data, molienda) => {
  return data.filter(bebida => bebida.facts && bebida.facts.molienda && bebida.facts.molienda.toLowerCase() === molienda.toLowerCase());
};