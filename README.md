# Repositorio de aprendizaje de JavaScript

## Indice

- [Variables](#variables)

### Variables

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
