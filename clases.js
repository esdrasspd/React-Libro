function vacaciones(destino, longitud){
    this.destino = destino;
    this.longitud = longitud;
}

vacaciones.prototype = {
    mostrar: function(){
        console.log("Destino: " + this.destino + " Longitud: " + this.longitud);
    }
}

const maul = new vacaciones("Maul", 14);

maul.mostrar();