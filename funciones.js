function calcularPrecio(precioUnitario, cantidad){
    const total = precioUnitario * cantidad;
    return total;
}


function puedeReservar (cantidad) {

    if (cantidad <= 2) {
        return true;
    } else {
        return false
    }

}