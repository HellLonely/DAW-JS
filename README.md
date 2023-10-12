# Repositorio de aprendizaje de JavaScript

## Indice

- [Variables](#variables)
- [Tipos de datos](#datos)
- [Operadores](#operadores)
    - [Operadores Basicos](#operadores-basicos)
    - [Rarezas](#rarezas)

## Variables

<div id='variables'>
<p>En JavaScript existen tres tipos de varibles distintos.</p>
<b>var</b>

Este tipo de variable guarda información en su interior pero tiene un alcance de función o global.
Básicamente que si se declaran dentro de una funcion esta disponible en dicha función o si es declarada fuera puede ser usada en todo el script.
       
```javascript
var numero = 25;
```

<b>let</b>

Este tipo de variable es igual que el <b>var</b> con la diferencia de que solo tiene un alcance de bloque.
Básicamente que solo esta disponible en la función, bucleo, método o dentro de llaves que estés usando pero no fuera de él.

```javascript
let nombre = 'Alfonso';
```
<b>const</b>

Este es un tipo de variable que solo coge el valor inicial que tiene, no se puede reasignar ya que es una constante.


```javascript
const pi = 3.14;
```


#### ¿Diferencias entre let y var?

La principal diferencia entre estés tipos de variable es el alcance(scope), el <b>var</b>  tiene un alcance de función o global y el <b>let</b> solo tiene alcance de bloque.

Por ejemplo:

```javascript
if(true){
    var nombre = 'Alfonso'
    let apellido = 'Gonzalez'
}

console.log(nombre); // Salida ->  Alfonso
console.log(apellido);// Salida ->  apellido is not defined
```

En este ejemplo se ve bien el alcance de ambas variables, la variable ```nombre``` podemos usarla fuera de la condición if, pero la variable ```apellido``` nos devuelve un error, nos dice que no está definida. Solo podríamos usarla si está dentro del if.

```javascript
if(true){
    var nombre = 'Alfonso'
    let apellido = 'Gonzalez'

    console.log(apellido);// Salida ->  Gonzalez
}

console.log(nombre); // Salida ->  Alfonso
console.log(apellido);// Salida ->  apellido is not defined
```

</div>

## Tipos de datos
<div id='datos'>
<p>Los datos de JS se dividen en dos principales tipos Primitivos y Compuestos</p>

### Primitivos

Los tipos de datos primitivos son valores simples que representan datos básicos

  1. <b>Number: Representa valores numéricos, ya sean enteros o decimales.</b>
   
  ```javascript
    let edad = 25;
    let precio = 19.99;
  ```
  2. <b>String: Representa texto entre comillas simples o dobles.</b>
   
  ```javascript
    let nombre = "Juan";
    let mensaje = '¡Hola, mundo!';
  ```
  3. <b>Boolean: Representa un valor verdadero o falso.</b>
   
  ```javascript
    let esMayorDeEdad = true;
    let esDiaSoleado = false;
  ```
  4. <b>Undefined: Representa una variable que ha sido declarada pero aún no se le ha asignado ningún valor.</b>
   
  ```javascript
    let x;
    console.log(x); // undefined
  ```
  5. <b>Null: Representa la ausencia intencional de un valor o un objeto vacío.</b>
   
  ```javascript
    let noHayValor = null;
  ```


### Compuestos
<p>Los tipos de datos compuestos son estructuras de datos más complejas que pueden contener varios valores y tienen métodos y propiedades propias. </p>

  6. <b>Array: Representa una lista de valores ordenados.</b>
  ```javascript
    let colores = ['rojo', 'verde', 'azul'];
  ```
  7. <b>Object: Representa una colección de pares clave-valor, donde las claves son cadenas de texto que identifican las propiedades.</b>
   
  ```javascript
    let persona = {
    nombre: 'María',
    edad: 30,
    };

    console.log(persona.nombre) // María
    console.log(persona.edad) // 30
    console.log(persona.apellidos) // Undefined
  ```

  para acceder a los valores dentro de los objetos simplemente hacemos ```objeto.propiedad```. Si la propiedad no existe devuelve ```Undefined```.

  8. <b>Function: Representa un fragmento de código que se puede ejecutar.</b>
   
  ```javascript
    function saludar(nombre) {
    console.log(`¡Hola, ${nombre}!`);
    }

    saludar('Ernesto') // ¡Hola, Ernesto!
  ```

  Esta es la sintaxis normal para crear una funcion pero tambien existen las llamadas funciones de flecha que su sintaxis seria la siguiente.

  ```javascript
    const saludar = (nombre) => {
        console.log(`¡Hola, ${nombre}!`);
    }

    saludar('Ernesto') // ¡Hola, Ernesto!
  ```

  Estas dos formas de escribir las funciones no varían el resultado final. Se pueden usar de forma indistinta

  8. <b>Date: Representa una fecha y hora específicas.</b>
   
  ```javascript
    let fechaActual = new Date();
    console.log(fechaActual) // Mon Oct 09 2023 20:28:22 GMT+0200 (hora de verano de Europa central)
  ```

  9. <b>RegExp: Representa un patrón de búsqueda en cadenas de texto.</b>

  ```javascript
    let patron = /[0-9]+/;
  ```
### Undefined vs Null
  <p>Son dos tipos de datos que se utilizan para representar la ausencia de valor, pero tienen diferencias.</p>

  ```javascript
    let variableSinValor;
    console.log(variableSinValor); // undefined

    let Alumno = {
        nombre: "Ernesto",
        notas: [7, 4, 9]
    };
    console.log(Alumno.nombre); // Ernesto
    console.log(Alumno.apellidos); // undefined
  ```

  ```Undefined``` significa que la variable ha sido creada pero no se le dio valor ```variableSinValor```. En un objeto tambien obtienes undefined cuando intentas acceder a una propiedad que no existe como ```Alumno.apellidos```.

  Undefinded es el valor por defecto de una variable en JavaScript.

  ```javascript
  let valorNulo = null;
  ```

  En cambio ```null``` es un valor que se utiliza en javaScript para decir que esa variable no tiene valor conocido.
</div>
<hr>

### Operadores

#### Operadores Basicos
<div id='operadores-basicos'>
<p>Podeis ver todos los operadores basicos que existen en JavaScript</p>

```javascript
let x = 5;

let suma = 5 + 3; // Suma

let resta = 10 - 4; // Resta

let producto = 6 * 7; // Multiplicacion

let division = 20 / 4; // Division

let residuo = 10 % 3; // Modulo

let menorQue = 4 < 7; // Menor que

let mayorQue = 10 > 6; // Mayor que

let and = true && false; // and es false

let or = true || false; // or es true

let not = !true; // not es false

```

</div>

#### Rarezas 

<div id='operadores-rarezas'>
<p>En JavaScript existen una serie de rarezas o comportamiento raros debido a las reglas que existen sobre los tipos. Os dejamos aqui una lista de estas rarezas.</p>

<b>Operador de igualdad</b>

Javascript convierte la cadena de texto a un numero para comparar.

```javascript
console.log(5 == "5"); // Salida -> true,
```
<b>NaN (Not-a-Number)</b>

NaN es un valor especial que representa que un numero no existe. Si NaN se compara consigo mismo da false.


```javascript
console.log(NaN == NaN); // Salida -> false
```
<b>Operador or y valores por defecto</b>

Este operador asigna un valor por defecto si una variable es ```undefined``` o ```null```.

```javascript
let nombre = undefined;
let nombre2 = nombre || "Alfonso"; // nombre2 -> Alfonso

```

</div>



## Estructuras de control


<div>

### If y Switch 


<b>Estructura IF</b>

Estructura basada en el control de condicones.

```javascript
  if (condición) {
    // Código a ejecutar si la condición es verdadera
  } else {
    // Código a ejecutar si la condición es falsa
  }
```

Ejemplo:

```javascript
let numero = 2

if (numero < 5){
  numero += 1;
}else {
  numero -= 1;
}
``` 
<b>Estructura Switch</b>

Permite seleccionar uno de varios bloques de código para ejecutar

```javascript
switch (expresión) {
  case valor1:
    // Código a ejecutar si la expresión coincide con valor1
    break;
  case valor2:
    // Código a ejecutar si la expresión coincide con valor2
    break;
  // Más casos aquí
  default:
    // Código a ejecutar si la expresión no coincide con ninguno de los casos anteriores
}
```
Ejemplo:

```javascript
var item = 'Coche';

switch (item) {
  case 'Coche':
    console.log('Brum Brum');
    break;
  case 'Moto':
    console.log('Fium Fium');
    break;
  default:
    console.log('No se que eres')
}
```

### Bucles (Loops)

<b>For</b>

Se utiliza para ejecutar un bloque de código un número específico de veces.

```javascript
for (inicialización; condición; actualización) {
  // Código a ejecutar en cada iteración
}
```
Ejemplo: 

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```
<b>While</b>

Se ejecuta mientras una condición sea verdadera.

```javascript
while (condición) {
  // Código a ejecutar mientras la condición sea verdadera
}
```

Ejemplo:

```javascript
let permiso = true;

while (permiso == true) {
  console.log('Tienes permiso');
}
```


<b>do...while</b>

Similar al bucle while, pero garantiza que el bloque de código se ejecutará al menos una vez.

```javascript
do {
  // Código a ejecutar al menos una vez
} while (condición);
```

Ejemplo: 

```javascript
var i = 0

do {
  console.log(i)
  i++;
} while (i < 10);
```

<b>for...in</b>

Se utiliza para recorrer <strong>propiedades de un objeto</strong>. No se utiliza para recorrer arrays.

Ejemplo: 

```javascript
const objeto = { a: 1, b: 2, c: 3 };

for (let propiedad in objeto) {
  console.log(propiedad + ": " + objeto[propiedad]);
}
```

<b>for...of</b>

Se utiliza para recorrer elementos de un objeto iterable, como arrays.

```javascript
const miArray = [1, 2, 3, 4, 5];

for (let elemento of miArray) {
  console.log(elemento);
}
```

</div>