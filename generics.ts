// Este tipado es flexible, ya que nos permite utilizar cualquier TYPE en nuestra clase

// La nombramos como una clase generica con el "<T>"
class Datastore<T> {
    private items: T[] = [];

    addItem(item: T): void {
        this.items.push(item)
    }

    getItem(index: number): T {
        return this.items[index];
    }

    removeItems(index:number): void {
        this.items.splice(index, 1)
    }

    getAllItems():T[]{
        return this.items
    }
}

const data = new Datastore<string>() // Especificamos el TYPE cuando instanciamos la clase, en este caso es "string"

// Incluso podemos user Interfaces en esta clase generica

interface User {
    name: string;
    id: string
}

const newUser = new Datastore<User>() // Creamos la instancia con el interfaz de "User" y sus propiedades

// Funcion generica
// Disponemos de dos TYPES genericos, uno corresponde a la "key" que es al "K", y el otro al "value", con la "V"
function getValue<K, V>(key: K, value1: V, value2: V ):V{
     if(key){
        return value1
     }
       return value2
}

// En esta caso podemos especificar los TYPES, aunque no es obligatorio hacerlo
getValue<string, number>("Hello", 1, 2)