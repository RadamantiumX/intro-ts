// Es una manera de crear un CUSTOM TYPE, a diferencia de las "Interfaces", que son utilizadas por clases y objetos, en este caso, nos permite crear nuestro TYPE personalizado, pero NO basada en OBJECTS

// Type personalizado con ALIAS
type Coordinate = [number, number]

function compareCoords(p1: Coordinate, p2:Coordinate):Coordinate{
  return [p1[0], p2[1]] // Solo admite un ARRAY con una TUPLA limitada con un index que abarca desde el 0 ~ 1, si le ponemos un 2, es "undefined"
}

const coords: Coordinate[] = [] // Creamos un ARRAY de "Coordinate"

// A diferencia de las "Interfaces", no podemos hacer un "implement" del "type"
// Tampoco podemos hacer un "extends" del "type", como asi lo hariamos con la "interface"