// Abstract classes
// Esta clase puede ser instanciada
class Person {
    name:string;
    constructor(name:string){
        this.name = name;
    }

    greet(){
        console.log(`Hello there, your are ${this.name}`)
    }
}

// Las clases abstractas no pueden ser instanciadas

abstract class Animal{
    // Debemos incluir un metodo en la clase abstracta
    abstract makeSound(duration:number):void; // Metodo abstracto 

    move(duration: number) { // Añadimos para la funcionalidad
        console.log('Its moving...')
        this.makeSound(duration)
    }
}

// Extendemos la clase abstracta y utilizamos el metodo
class Dog extends Animal{
  makeSound(duration: number): void {
      console.log("Guau guau...")
  }
}

// Ahora si podemos instanciar 
// Solo en la Sub-Class podemos hacer esto
const dog = new Dog()

dog.move(10) // Ahora si podemos utilizar los metodos de una clase abstracta
