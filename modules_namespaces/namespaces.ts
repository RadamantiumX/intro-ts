/**
 * Nos permite organizar codigo en diferentes bloques dentro de un
 * archivo individual.
 * En la mayoria de los casos, es preferible utilizar TS MODULES
 */
namespace Utils {
    export class GenericClass {

    }

    export function myFn(){

    }

    export const NAME = "Eddy";

    export interface NewGenericType {
        name: string
    }
}

// Organizamos muchas clases, funciones, etc. en un NAMESPACE, por lo cual, ahora lo podemos utilizar 
// de la siguiente forma

const results = Utils.myFn()
const results2:Utils.NewGenericType = { name: 'Eddy' } // Podemos utilizar la "interface"