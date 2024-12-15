class Cannis {
    // Atributo estatico
    static instanceCount: number = 0 // Solo existe en la clase REAL, no en la instancia
    name:string

    constructor(name:string){
        Cannis.instanceCount ++; // En cada instancia del scope sumará +1

        // Este "this" hace referencia a alguna instancia que creemos
        this.name = name
    }

    // Metodo estatico
    static decreaseCount(){
        // Este "this" hace referencia a la clase misma o sea a "Cannis"
        this.instanceCount --; // Decrementamos
    }
}

const dog1 = new Cannis("Tim")
console.log(Cannis.instanceCount) // 1 <--- Solo de esta forma podemos llamar a este atributo

const dog2 = new Cannis("Bill")
console.log(Cannis.instanceCount) // 2

