function contarCaracteres(string, caracter) {
    return string.split('').filter(x => x === caracter).length;
}

function sumarPrecios() {
    let totalPrecios = 0;

    let precios = document.querySelectorAll('.precio').forEach(function (precio) {
        if (precio.value != "") {
            totalPrecios += parseFloat(precio.value);
        }
    });

    let valorFormateado = totalPrecios.toLocaleString("es-CL", {
        style: "currency", currency: "CLP", minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    let suma = document.getElementById('suma');

    suma.textContent = valorFormateado;
    return totalPrecios;
}

let formatearTexto = function () {
    sumarPrecios();
}

document.querySelector('.precio').addEventListener('input', formatearTexto);

document.getElementById('agregar-precio').addEventListener('click', function (event) {
    let contenedorPrecios = document.querySelector('.precios');
    let nuevoPrecio = document.createElement('input');
    nuevoPrecio.type = 'number';
    nuevoPrecio.className = 'precio';
    nuevoPrecio.addEventListener('input', formatearTexto);
    contenedorPrecios.appendChild(nuevoPrecio);
});

document.getElementById('calcular').addEventListener('click', function (event) {
    let totalPrecios = sumarPrecios();

    let descuento = document.getElementById('descuento').value;

    let totalHtml = document.getElementById('total');

    totalHtml.value = (parseFloat(totalPrecios) - (parseFloat(totalPrecios) * (parseFloat(descuento) / 100))).toLocaleString("es-CL", {
        style: "currency", currency: "CLP", minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
});

