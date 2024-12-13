function makeName(firstName: string, lastName: string, middleName?: string) {
  // Añadiendo el "?", decimos que es "string" o "undefined"
  // Do something
}

// Cuando llamos a la funcion, no es necesario agregar el tercer parametro, ya que, puede ser "undefined"
// Es decir... es un parametro OPCIONAL
const fullName = makeName("Ed", "Norris");

// Asi pondriamos el TYPE de una funcion que pasamos parametro
function callFunc(
  func: (f: string, l: string, m?: string) => string, // Definimos los TYPES de esa funcion que le pasamos, y el TYPE que retorna
  param1: string,
  param2: string
) {
  // Do something
}


function mul(x:number, y:number):number{
    return x * y
}

function div(x:number, y:number):number{
    return x / y
}

// En la siguiente funcion esperamos multiples valores
// Para el primer parametro, esperamos un array de funciones 
// En el segundo, esperamos un ARRAY de TUPLAS con valores numericos
function applyFunctions(funcs:((a:number, b: number)=>number)[], values:[number, number][]):number[]{
   const results:number[] = []
   for(let i = 0; i < funcs.length; i++){
    const args = values[i]
    const result = funcs[i](args[0], args[1])
    results.push(result)
   }
   return results
}

applyFunctions([mul, div], [[1,2], [4,5]])