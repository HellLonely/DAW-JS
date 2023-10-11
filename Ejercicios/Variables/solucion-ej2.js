/**
 * Ejercicio 2 
 * 
 * Demuestrame de manera practica la diferencia de las variables let y var;
 */


function ejemploLetVar() {
    if (true) {
      let variableLet = "Soy una variable let";
      var variableVar = "Soy una variable var";
    }
    console.log(variableLet); // Generará un error: "variableLet is not defined"
    console.log(variableVar); // No generará un error y mostrará "Soy una variable var"
  }
  
  ejemploLetVar();
  