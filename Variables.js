//Antes de constantes solo habian variables.
var pizza = verdadero;
pizza = falso;
console.log(pizza); // false

//Ahora tenemos constantes.

const pizza = verdadero;

//Ejemplo con if
var tema = "JavaScript";

if (tema){var
    tema = "React";
    console.log("dentro del primer bloque", tema); //react bloqueado.
}

console.log("global", tema); // react global.