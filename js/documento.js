class Didactico {

    constructor(producto, precio, material) {
        this.producto = producto.toUpperCase();
        this.precio = parseFloat(precio);
        this.material = material;
    }

    sumarEnvio() {
        this.precio = this.precio + 250;
    }
}

const pelota = new Didactico('pelota', 1000, 'goma');
const pez = new Didactico('pez', 1100, 'goma');
const hueso = new Didactico('hueso', 1300, 'cuero');
const mancuerna = new Didactico('mancuerna', 1250, 'goma');
const buzo = new Didactico('buzo', 2000, 'algodón');
const gorro = new Didactico('gorro', 1500, 'lana');
const ortopedica = new Didactico('ortopedica', 5500, 'algodón');
const clasica = new Didactico('clasica', 3000, 'algodón');
const nido = new Didactico('nido', 3500, 'algodón');
const iglu = new Didactico('iglu', 4000, 'algodón');
const redonda = new Didactico('redonda', 4500, 'algodón');


buzo.sumarEnvio();
console.log('El precio de ' + buzo.producto + ' (fabricado con ' + buzo.material + ')' + ' es ' + buzo.precio + '.Esto incluye el envío.');


const mordedores = [pelota, pez, hueso, mancuerna];
const ropitas = [buzo, gorro];
const camas = [ortopedica, clasica, nido, iglu, redonda];

for (let i of camas) {
    console.log(i);
}

for (let i in mordedores) {
    console.log(i);
}

mordedores.shift();
console.log(mordedores);

camas.splice(2, 2);
console.log(camas);

const encontrado = mordedores.find((mordedores) => mordedores.precio < 1100);
console.log(encontrado);

const filtrado = ropitas.filter((ropitas) => ropitas.precio < 2000);
console.log(filtrado);

const buscaCamas = camas.some((camas) => camas.precio < 3000);
console.log(buscaCamas);

const descuento = camas.map((camas) => {
    return {
        comida: camas.producto,
        precio: camas.precio * .90
    }
})

console.log(descuento);

let saludo = prompt(`Bienvenido a Happy Paws. La tienda pensada para el bienestar de sus mascotas.\n¿Qué productos desea ver?
\n Por favor, ingrese la opción correspondiente:
\n1- MORDEDORES\n2- ROPITAS\n3- CAMAS`);

saludo = parseInt(saludo);

if (saludo == 1) {
    mordedores.forEach(element => {
        console.log(element)
    });

} else if (saludo == 2) {
    ropitas.forEach(element => {
        console.log(element)
    });
} else if (saludo == 3) {
    camas.forEach(element => {
        console.log(element)
    });

} else {
    console.log('Lo siento, no ha ingresado el dato correspondiente');
}