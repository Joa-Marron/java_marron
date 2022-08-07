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

camas.splice(2,2);
console.log(camas);