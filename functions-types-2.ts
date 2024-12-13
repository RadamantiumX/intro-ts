function sum(...numbers: number[]){

}
// Al declarar la funcion de esta forma, podemos ver que admite una cantidad aleatoria de parametros
sum(1,2,3)
sum(1)
sum(1,25,36,45,4,58,89)

// Overloaded FUNCTIONS -- Funciones SOBRECARGADAS //
/**
 * Tiene diferentes firmas de llamadas y puede aceptar diferentes TYPES
 */

function getItemLength(name:string):number ;
function getItemLength(names:string[]):number;

function getItemLength(nameOrNames:unknown):number { // Funcion general que maneja las diferentes sobrecargas
    if(typeof nameOrNames === "string"){
        return nameOrNames.length
    }else if(Array.isArray(nameOrNames)){
        return nameOrNames.length
    }else{
       return 0 
    }

    
}

// Como vemos, implementamos multiples formas de llamar a una misma funcion
// Cada vez que llamemos, va a detectar la sobrecarga correcta segun el parametro que le pasemos.
getItemLength("name")
getItemLength(["name","yml","next"])
