/**
 * Puede resultarnos muy util en el codigo, por medio de esto
 * podremos crear TYPES mas personalizados.
 */

// Partial Utility

interface Todo{
    title: string;
    description: string
}

// Con el "Partial" hacemos que todas propiedades dentro de la "interface"
// sean opcionales.
// Es muy util cuando no queres crear otra "interface", y solo necesitamos
// algunas propiedades de la misma.
const updateTodo = ( todo: Partial<Todo> ) => {
  //
}


// Readonly Utility Type

// Es solo de lectura y no se puede cambiar
interface NextTodo{
    title: string
}

const myTodo: Readonly<NextTodo> = { title: "Learn TS" }
// myTodo.title = "Modifing" // Como es "Readonly" no podemos modificar la propiedad
// Es util en un objeto donde NO queremos que se modifiquen sus propiedades
// De todas formas, podemos utilizar sus propiedades en donde se lo requiera, pero solo leerlas

// Record Utility Type
// Nos permite tener alguna clave asociada a un valor

interface PageInfo {
    title: string;
}

// Lo utilizamos con un TYPE "string" como KEY
const pages: Record<string, PageInfo> = {
    home: { title: "Home" },
    about: { title: "About" },
    contact: { title: "Contact" }
}

// Lo utilizamos con un TYPE "number" como KEY
const pageNumbers: Record<number, PageInfo> = {
    0: { title: "Home" },
    1: { title: "About" },
    2: { title: "Contact" }
}


// Pick Utility Type

// En este caso, con el "Pick", toma un Type "T" (GENERIC) y luego especificamos 
// las propiedades que vamos a utilizar de una "interface".
// Con esto estamos creando un nuevo TYPE
interface AnotherTodo {
    id: number;
    title: string;
    completed: boolean;
}

// Tomamos las propiedades "title" y "completed" de "AnotherTodo"
type TodoPreview = Pick<AnotherTodo, "title" | "completed">;

const anotherTodo: TodoPreview = {
    title: "Listen",
    completed: false,
}

// Omit Utility Type
// Seria lo opuesto a PICK
interface OneMoreTodo {
    id: number;
    title: string;
    completed: boolean
}

// Omitimos "id", pero el resto sigue siendo parte de este Type
type TodoNextPreview = Omit<OneMoreTodo, "id">

const nextTodo: TodoNextPreview = {
    title: "Do the homework",
    completed: false
}