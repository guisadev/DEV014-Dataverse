//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';
import { filterData } from './dataFunctions.js';

const root = document.getElementById("root"); //crear una const root para asignarle el documento 

root.appendChild(renderItems(data));

console.log(filterData(data, 'origen', 'Italia'))
