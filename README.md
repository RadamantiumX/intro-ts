# TS COURSE

## Intro
Tenemos dos tipos de usos en JS: El uso dinámico y el estático

*Dinámico*: Este puede cambiar a través del proyecto. Es decir, puede ser mas facil de desarrollar aunque pueden aparecer cierto conflicto enntre las variables declaradas.

*Estático*: No cambia una vez que se declara. Con este sistema, ya sabemos que variables declaramos y cual sería su utilidad.

## Iniciando un proyecto con TS

Al iniciar un proyecto en el entorno NODE JS, despues de instalar TS, ejecutamos el siguiente comando para generar el archivo de configuración.

```bash
npx tsc --init
```


## Ejecución

Para empezar, no podemos ejecutar codigo TS en la consola, como lo haríamos normalmente con JS. Lo que tenemos que hacer para ejecutar codigo TS, es compilarlo primero, es la forma que tiene el navegador o la consola para entender el TS. Se compila para transformarlo en codigo JS.
Utilizamos el siguiente comando en el mismo directorio del codigo TS que queremos ejecutar.

```bash
tsc
```

De esta forma, nos genera el codigo JS que si puede ser ejecutado. También podemos agilizar el proceso añadiendo este comando al **script** del **package.json**.

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "tsc && node test.js"
  },
```

De esta forma, con el comando **npm run dev** se compilará el codigo TS y se ejecutará automanticamente el JS.


## Configuracion

Dentro del archivo **tsconfig.json** podemos utilizar la configuración que nosotros necesitemos. Mayormente, una vez generado este archivo, no necesitaremos grandes cambiosn en el, o quizás ninguno, entre las configuraciones mas utilizadas encontramos a "rootDir": "./", el cual nos permite especificar la ubicación del archivo main, o tal vez el "allowJs" que nos permite utilizar el JS en el proyecto TS.
El mas importante es la configuración *strict*, la cual deberíamos ponerla en *true*, esto evita que continuemos con la compilación si hay un error detectado en los tipos.


## Usos en TYPES primitivos

En el caso de ser una variable explícita, no es necesario darle un TYPE.

```js
let x: number = 0 // Puede no ser necesario el tipado en este caso
```
También esta el caso de las variables implicitas.

```js
let x: number;// El tipado es necesario
```

## Arrays y Tuplas

En un ARRAY podemos guardar distintos valores de distinto TYPE, aunque se recomienda guardar valores del mismo TYPE para evitar algun problema en la utilización de los mismos.
Podemos tipar un ARRAY anidado.

```js
var arr:string [][] = [["arr"],["str"],["ls"]]
```

En el caso de las TUPLAS (similares a un ARRAY) las seleccionamos cuando ya sabemos cuantos valores vamos a guardar, y que tipo de valores son esos mismos. Por ejemplo, las utilizamos para las coordenadas.

```js
const coord:[number, number] = [112215, 33588889]
```

Como podemos ver, los valores de las coordenadas son dos (y, x) y son numéricos. También podemos determinar un ARRAY de coordenadas, o una TUPLA de ellas.

```js
const coords: [number, number][] = [
  [1, 2],
  [-1, 3]
]
```

Almacenamos TUPLAS dentro de un ARRAY.


## Literals & Enums

El LITERAL es un valor específico

```js
let direction: "north" | "south" | "east" | "west";
```

En esta variable guardaremos un punto cardinal, y ya sabemos cuales son, asi que los especificamos como TYPES en vez de ponerle simplemente *string*. No se le podrá asignar otro valor a esa variable que no sea uno de esos.


