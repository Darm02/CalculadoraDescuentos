function contarCaracteres(string, caracter) {
    return string.split('').filter(x => x === caracter).length;
}

function sumarPrecios() {
    let totalPrecios = 0;

    let precios = document.querySelectorAll('.precio').forEach(function (precio) {
        if (precio.value != "") {
            totalPrecios += parseFloat(precio.value.replace(/\./g, '').replace(',', '.'));
        }
    });

    let suma = document.getElementById('suma');
    suma.textContent = totalPrecios;
    return totalPrecios;
}

let formatearTexto = function () {
    let inputPrecio = this;
    let valorSinFormato = inputPrecio.value.replace(/\./g, ''); // Remover puntos existentes
    let valorFormateado = valorSinFormato.replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Agregar puntos
    inputPrecio.value = valorFormateado;
    sumarPrecios();
}

let manejarEntrada = function (event) {
    if (event.keyCode === 190 || event.keyCode === 110) { // Código de la tecla de punto "."
        event.preventDefault(); // Evitar que el punto se ingrese normalmente
        var currentPosition = this.selectionStart; // Obtener la posición actual del cursor
        var value = this.value;
        this.value = value.substring(0, currentPosition) + ',' + value.substring(currentPosition + 1); // Reemplazar el punto por coma
        this.setSelectionRange(currentPosition + 1, currentPosition + 1); // Mover el cursor una posición hacia adelante         
    }   
}

document.querySelector('.precio').addEventListener("keydown", manejarEntrada);

document.querySelector('.precio').addEventListener('input', formatearTexto);

document.getElementById('agregar-precio').addEventListener('click', function (event) {
    let contenedorPrecios = document.querySelector('.precios');
    let nuevoPrecio = document.createElement('input');
    nuevoPrecio.type = 'text';
    nuevoPrecio.className = 'precio';
    nuevoPrecio.addEventListener('input', formatearTexto);
    nuevoPrecio.addEventListener('keydown', manejarEntrada);
    contenedorPrecios.appendChild(nuevoPrecio);
});

document.getElementById('calcular').addEventListener('click', function (event) {
    let totalPrecios = sumarPrecios();

    let descuento = document.getElementById('descuento').value;

    let totalHtml = document.getElementById('total');

    totalHtml.value = parseFloat(totalPrecios) - (parseFloat(totalPrecios) * (parseFloat(descuento) / 100));
});

