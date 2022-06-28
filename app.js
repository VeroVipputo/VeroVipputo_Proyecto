const baseDeDatos = [
    {
        id: 1,
        nombre: 'The Shining',
        precio: 2000,
    },
    {
        id: 2,
        nombre: 'The Da Vinci Code',
        precio: 2000,
    },
    {
        id: 3,
        nombre: 'El principito',
        precio: 2000,
    },
    {
        id: 4,
        nombre: 'Sobrenatural',
        precio: 2000,
    }

];

for(let i = 0; i < baseDeDatos.length; i++ ) {
    console.log(baseDeDatos[i].nombre);
}

let total = 0;
const agregarCarrito = (precio) => total += precio;

const calcularImpuesto = (total) => 1.21 * total;

total = agregarCarrito(200);
total = agregarCarrito(300);
total = agregarCarrito(400);
console.log(total);

const totalPagar = calcularImpuesto(total);

console.log(`El total a pagar es de ${totalPagar}`);