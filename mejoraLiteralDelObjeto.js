const nombre = "Tallac";
const elevacion = 9738;
const impresion = function(){
    console.log("Mt. ${this.nombre} es ${this.elevacion} metros de altura.");
};

const montaña = {nombre, elevacion, impresion};

montaña.impresion(); // Mt. Tallac es 9738 metros de altura.

//Al definir metodos de objeto, ya no es necesario tulizar la palabra clave function

const esquiador = {
    nombre,
    sonido,
    polvoYell() {
        let gritar = this.sonido.toUpperCase();
        console.log('${gritar} ${gritar} ${gritar}!!!');
    },
    velocidad 
        (mph) {
            this.velocidad = mph;
            console.log("velocidad: ", mph);
        }
};

