/**
 * Es la forma de crear objetos
 */

interface Person {
    name: string;
    age: number
    height?: number; // Propiedad opcional
    hello: () => void // Debe contener una funcion esta propiedad
}

const person: Person = {
    name: "Eddy",
    age: 39,
    hello: function(){ console.log(`Hello there ${this.name}`) } // Hacemos referencia a una propiedad de este objeto con "this" (Solo en funciones regulares, no en ARROW FUNCTIONS)
}

// Nos permite utilizar diferentes objetos para TYPES especificos
// Regla: Al crear una INTERFACE, debemos implementar todas las propiedades que contenga
// Aunque, como vimos anteriormente, podemos poner valores opcionales con el signo de pregunta "?"

// Extensión de uns INTERFACE
// En este caso "Employee" hereda todas las propiedades de "Person"
interface Employee extends Person{
   employeeId: number
}

const worker: Employee = {
    name: "Dimitry",
    age: 23,
    height: 1.80,
    hello: function () {console.log(`Hello worker ${this.name}`)},
    employeeId: 4992
}

interface Manager extends Employee, Person{ // Puede heredar de ambas interfaces
    employees: Person[]
}