
//Desafio 3 

function Producto (marca, modelo, descripción, precio) {
    this.marca = marca
    this.modelo = modelo
    this.descripcion = descripción
    this.precio = precio
}

const producto1= new Producto ("Samsung", "S22","Celular Smart", 68000);

const producto2= new Producto ("Dell", "AMD","Dell Inspiron 8 gb de ram", 150000);

const producto3= new Producto ("Daewoo", "Atornillador18V","Taladro atornillador 18v", 25000);

const producto4= new Producto ("Nexus", "5000","Hidrolavadora Alta presión 1400W 110/b", 20000);

let carrito = [producto1, producto2, producto3, producto4]

console.log(carrito[2])

document.write(JSON.stringify(carrito))

