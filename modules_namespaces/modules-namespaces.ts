// Modules
// importamos las funciones colocadas en los archivos internos
import { simple } from "./simple/util";
import { simple as complex } from "./complex/util"; // en el caso que ambas funciones tengan el mismo nombre, en TS podemos poner un ALIAS a estas export regulares.

// Utilizando el NAMESPACE en otro archivo
// No es necesario importar nada, solo lo llamamos y lo utilizamos.
const resul = Utils.NAME 