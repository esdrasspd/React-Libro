function logCompliment() {
    console.log("¡Lo estas haciendo muy bien!");
};

logCompliment(); //Invocando funcion.

//Expresiones de funciones.

const logElogio = function() {
    console.log("¡Lo estas haciendo muy bien!");
};

logElogio(); //Invocando funcion.

//Funciones con argumentos

const logCompliment = function(nombre) {
    console.log('Lo estás haciendo muy bien, ${nombre}!');
};

logCompliment('Esdras'); //Invocando funcion.

//Otro ejemplo de funciones con argumentos.

const logCompliment = function(nombre, mensaje) {
    console.log('${mensaje}, ${nombre}!');
}

logCompliment('Esdras', 'Lo estás haciendo muy bien'); //Invocando funcion.

//Funciones con flecha.

const lordify = nombre => '${nombre} de Canterbury';

console.log(lordify("Esdras"));

