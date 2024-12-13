// Literals //
let direction: "north" | "south" | "east" | "west"; // El tipo de variable son esos 4 valores posibles

let logicValue: true; // Esta @var solo admite un solo tipo de valor que es "true", no se le puede asignar otro

///////////////////////////////////////////////////////////////////
// Enums //

// Numeric Enum
// Definimos diferentes valores, a diferencia de los "Literals" aca le damos un poco de contexto a estos valores
// Tenemos mas control de los valores, incluso podemos modificarlos con la combinacion de teclas
// Ctrl + f

// Por defecto empieza por el 0 y va de 1 en 1, pero podemos cambiar esos valores por el que necesitemos
// El valor numero siempre va a variar segun que valor tenga el primero, si le ponemos 100, el que sigue sera
// 101, y asi sucesivamente.
enum Size{ // Cada uno de estos valores esta representado por un número empezando desde el 0
    Smallest = 101, 
    Medium,
    Large,
}

Size.Large

var size: Size = 101 // O puede ser Size.Smallest

if(size === Size.Smallest){
    // do something
}

// String Enum

// Almacenamos un grupo de variables de las cuales sabemos que no van a cambiar
// Agrupamos valores constantes.
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

// Los unicos valores asignables son las constantes que ya especificamos
var value: Direction = Direction.Up