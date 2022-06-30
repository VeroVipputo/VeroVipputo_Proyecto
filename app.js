class BaseDeDatos {
    constructor (id, nombre, precio){
        this.id = id;
        this.nombre = nombre;  
        this.precio = precio;  
    }
}

const productos = [];
productos.push(new BaseDeDatos (1, 'The Shining', 2000));
productos.push(new BaseDeDatos (2, 'The Da Vinci Code', 2000));
productos.push(new BaseDeDatos (3, 'El principito', 2000));
productos.push(new BaseDeDatos (4, 'Sobrenatural', 2000));


for(let i = 0; i < productos.length; i++ ) {
    console.log(productos[i].nombre);
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