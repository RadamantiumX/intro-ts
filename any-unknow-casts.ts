// ANY //
/**
 * Solo se utilizará en alguna situción compleja
 * en la cual, no sabemos que TYPE será nuestra variable.
 * Por lo tanto, debemos evitar la utilización de las mismas,
 * a menosq ue sea muy necesario.
 */

let a: any = 1 // Con "any" TS ignora el Type en esta variable, es decir, los errores 
               // no van especificarce por ninguna razon.

//////////////////////////////////////////////////////

// UNKNOWN //
/**
 * Lo utilizamos cuando NO SABEMOS QUE TYPE SERA NUESTRA VARIABLE,
 * pero a diferencia de ANY, nos fuerza a confirmar el TYPE antes de comenzar
 * a realizar una operacion.
 */

let u: unknown = 1

// n + 1 // Error: No se puede realizar esta operación "z" sigue siendo UNKNOWN

if (typeof u === "number"){ // SI --> Afirmamos que "u" es "number"
    const result = u + 1
}else if(typeof u === "string"){ // SI --> Afirmamos que "u" es "string"
    const result = u.length
}

const result = (u as number) + 1 // Podemos definir el TYPE de esta forma

/**
 * Es muy util cuando aun no definimos el TYPE, o mas bien,
 * podría estar cambiando a lo largo del proyecto.
 */
// Ejemplo
// En esta situción, como se trata de un "input" de usuario
// el "unknown" esta bien aplicado,
// Ya que no sabemos que es lo que ingresará
function processFeedback(input: unknown):void{ // Especificamos que no retorna nada la funcion con "void"
    if(typeof input === "string"){
        console.log(`Processing text: ${input}`)
    } else if (typeof input === "number"){
        console.log(`Processing rating: ${input}`)
    } else if(input instanceof Blob){
        console.log(`Processing File`)
    }else{
        console.log('Unsoported type of input')
    }
}

processFeedback("Nice job") // Primer IF
processFeedback(5) // Segundo IF
processFeedback(new Blob()) // Tercer IF
processFeedback([1,2,3]) // ELSE

/**
 * En efecto, es preferible utilizar UNKNOWN en vez de ANY, ya que,
 * nos obliga a especificar el TYPE en alguna operación que querramos realizar.
 */