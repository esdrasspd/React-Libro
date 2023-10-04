let log = function(msg){
    console.log(msg);
};

log("En JavaScript, las funciones son variables");

//Funcion de flecha.

const log2 = msg => console.log(msg);

//Como las funciones son variables, podemos agregarlas a objetos.

const obj = {
    message: "Ellos pueden ser agregados a objetos como propiedades",
    log(msg){
        console.log(msg);
    }
};

obj.log(obj.message);

//Tambien podemos agregar funciones a arreglos.

const mensajes = [
"Se pueden insertar en matrices", mensajes => console.log(mensajes), "variables similares", mensajes => console.log(mensajes), 
];

mensajes[1](mensajes[0]);