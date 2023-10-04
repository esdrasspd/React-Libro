var div,
    contenedor = document.getElementById('contenedor');

    for (var i = 0; i < 5; i++){ 
        div = document.createElement('div');
        div.onclick = function(){
            alert('Este es el cuadro #' + i);
        };
        contenedor.appendChild(div);
    }

    