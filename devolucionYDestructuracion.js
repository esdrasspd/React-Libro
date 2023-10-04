const persona = (nombre, apellido) => {
    return '${apellido}, ${nombre}';
}

console.log(persona("Esdras", "Sapón"));

//Objetos desestructurantes

const sandwich = {
    pan: "crujiente holandes",
    queso: "suizo",
    carne: "atún",
    aderezos: ["lechuga", "tomate", "mostaza"]
};

const {pan, carne} = sandwich;

console.log(pan, carne); // crujiente holandes atún

//Desestructuracion de matrices

const [primerAnimal] = ["Caballo", "Mono", "Perro"];

console.log(primerAnimal); // Caballo

//Pasando por alto valores innecesarios con la coincidencia usando comas.

const [,,tercerAnimal] = ["Caballo", "Mono", "Perro"];

console.log(tercerAnimal); // Perro



