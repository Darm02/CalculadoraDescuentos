document.getElementById('calcular').addEventListener('click', function(event) {
    let precio = document.getElementById('precio').value;
    let descuento = document.getElementById('descuento').value;

    let totalHtml = document.getElementById('total');

    totalHtml.value = parseFloat(precio) - (parseFloat(precio) * (parseFloat(descuento)/100));
});