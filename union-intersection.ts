// Union = pipe operator
// Intersection = end operator


// Union
type Some = string | number | boolean

// Using 
function seekSome(some:Some):void { // Utilizamos la UNION para determinar 3 Types posibles en una Type personalizado. Tiene que ser al menos de los que especificamos
    // Do something
}


// Intersection
interface BusinessParter{
    name:string;
}

interface ContactDetails{
    email: string;
    phone: string;
}

type BusinessContact = BusinessParter & ContactDetails // Personalizamos el Type utilizando la interseccion entre ambas "interfaces"

// En este caso tenemos que utilizar todas las propiedades que especificamos en ambas "interfaces" en las cuales establecimos la interseccion.
const contact: BusinessContact = {
    name: "Rada",
    email: "rada@mail.com",
    phone: "11222558"
}