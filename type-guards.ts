/**
 * EL TYPE GUARD es la forma que tenemos para verificar un TYPE VALUE
 * ante de operar con el mismo.
 */

type StringOrNumber = string | number;

function add1(value: StringOrNumber):StringOrNumber{
    if(typeof value === "string"){
        return value + "1"
    } else {
        return value + 1
    }
}

class AnotherDog{
   firstName: string;
   lastName: string;
   constructor(firsName:string, lastName: string){
    this.firstName = firsName;
    this.lastName = lastName;
   }

}

class AnotherCat{
    firstName: string;
    constructor(firsName:string){
     this.firstName = firsName;
     
    }
 }

 // Funcion para verificar la instancia de una clase
 function isDog(pet: AnotherDog | AnotherCat):pet is AnotherDog{
    return (pet as AnotherDog).lastName !== undefined
 }

 // Probamos la verificacion
 function  testTheVerification(pet: AnotherCat | AnotherDog) {
    if(isDog(pet)){ // Si es una instancia de... (Esta vez utilizamos una funcion para verificar la instancia)
        console.log(`This is a cat, the name is: ${pet.firstName}`)
    }else{
        console.log(`This is a dog, the name is: ${pet.firstName}`)
    }
 }

 function getName(pet: AnotherCat | AnotherDog) {
    if(pet instanceof AnotherCat){ // Si es una instancia de...
        console.log(`This is a cat, the name is: ${pet.firstName}`)
    }else{
        console.log(`This is a dog, the name is: ${pet.firstName}`)
    }
 }