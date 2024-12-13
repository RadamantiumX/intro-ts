const arr = [{name: 'tim'}, {name: 'joe'}, {name: 'jane'}]

// Al incorporar un signo (? o !), estamos disponiendo que la operación continúe a la siguiente declaración
const el = arr.pop()?.name // Al agregar un signo de pregunta, le decimos que puede llegar a ser UNDEFINED
const al = arr.pop()!.name // Al agregar el signo de exclamación, estamos forzando a que NO sea UNDEFINED

/**
 * No sería una buena practica el utilizar el signo de exclamación (!), ya que forza la declaración puede traer
 * problemas a futuro.
 * 
 * A esto se lo conoce como el BANG
 */