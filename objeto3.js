/*Define un objeto, que tenga dos propiedades: precio y descuento y un método neto. El método calculará el precio con el descuento aplicado. Mostrar por consola.
Por ejemplo objeto vestido, precio 400 y descuento 10. El método devolverá como resultado 360 (400 - 10*400/100).*/

const articulo = {
    precio : 400,
    descuento : 10,
}
const total = (articulo.precio - (articulo.descuento * articulo.precio / 100))
console.log(`El Vestido tiene un precio de $${articulo.precio} y un descuento de ${articulo.descuento}%, el total a pagar es de $${total}.`)
