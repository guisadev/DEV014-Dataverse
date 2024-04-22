//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const root = document.getElementById("root"); //crear una const root para asignarle el documento 

root.appendChild(renderItems(data));