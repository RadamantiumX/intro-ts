/**
 * Las INTERFACES las utilizamos para los OBJECTS pero tambien
 * pueden ser utilizadas en las CLASS
 */

interface Feline{
    speak(): void
}

// Al implementar una INTERFACE, tambien lo tenemos que hacer con las propiedades
// o metodo que contenga la misma
class Cat implements Feline{
    private name: string;
    private color: string;

    constructor(name: string, color: string){
        this.name = name;
        this.color = color
    }

    speak(): void { // Metodo obligatorio si implementamos "Feline"
        console.log(`The cat name is ${this.name}, the color is ${this.color}... and doing Meaw!`)
    }

    // Podemos añadir otro metodo, mientras que contenga "speak()"
    test(){
        return 1
    }
}

class Lyon implements Feline{
    speak(): void {
        console.log('Roar!')
    }
}

// Al instanciar la clase con la interfaz "Feline"
// Solo vamos a tenemos acceso al metodo de esta interfaz
const cat: Feline = new Cat("Kitty", "orange")
cat.speak()

const lyon = new Lyon()

// Igualamos las dos instancias en un ARRAY de "Feline"
const animals: Feline[] = [cat, lyon]