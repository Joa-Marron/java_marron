class Didactico {

    constructor(producto, precio, material, categoria) {
        this.producto = producto.toUpperCase();
        this.precio = parseFloat(precio);
        this.material = material;
        this.categoria = categoria;
    }

    sumarEnvio() {
        this.precio = this.precio + 250;
    }
}

/*------------------------------------------------------------------*/

const pelota = new Didactico('pelota', 1000, 'goma', 'mordedores');
const pez = new Didactico('pez', 1100, 'goma', 'mordedores');
const hueso = new Didactico('hueso', 1300, 'cuero', 'mordedores');
const mancuerna = new Didactico('mancuerna', 1250, 'goma', 'mordedores');
const buzo = new Didactico('buzo', 2000, 'algodón', 'ropitas');
const gorro = new Didactico('gorro', 1500, 'lana', 'ropitas');
const ortopedica = new Didactico('ortopedica', 5500, 'algodón', 'camas');
const clasica = new Didactico('clasica', 3000, 'algodón', 'camas');
const nido = new Didactico('nido', 3500, 'algodón', 'camas');
const iglu = new Didactico('iglu', 4000, 'algodón', 'camas');
const redonda = new Didactico('redonda', 4500, 'algodón', 'camas');

/*-----------------------------------------------------------------*/

const mordedores = [pelota, pez, hueso, mancuerna];
const ropitas = [buzo, gorro];
const camas = [ortopedica, clasica, nido, iglu, redonda];

const productosTotal = [pelota, pez, hueso, mancuerna, buzo, gorro, ortopedica, clasica, nido, iglu, redonda];


console.log(productosTotal);

let selectorOpciones = document.querySelector('#opcionesProductos');
let elegir = document.querySelector('#elegir');
let listaResultados = document.getElementById('resultado');

const filtrar = (array, categoria) => {
    return array.filter(item => item.categoria == categoria)
}


const handleClick = (array, select) => {
    return filtrar(array, select.value);
}

const mostrarHTML = (array, lista) => {
    lista.innerHTML = '';
    array.forEach(Didactico => {
        let li = `<li>${Didactico.producto}, fabricado con ${Didactico.material} $ ${Didactico.precio}</li>`
        lista.innerHTML += li;
    })
}

elegir.onclick = () => {
    mostrarHTML(handleClick(productosTotal, selectorOpciones), listaResultados);
}