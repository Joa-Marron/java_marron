const contenedor = document.querySelector('#contenedorTarjetas');
const container = document.querySelector('#cardContainer');
const selectCasa = document.querySelector('#casa');
const btnBuscar = document.querySelector('#buscar');
const searchBtn = document.querySelector('#search');

function filtrarCasa(array) {
    let casa = selectCasa.value;
    if (!casa) {
        return array;
    } else {
        resultado = array.filter((e) => e.casaDeHogwarts == casa);
        return resultado;
    }
}

function crearHTML(array) {
    contenedor.innerHTML = '';
    container.innerHTML = '';
    array.forEach((personaje) => {
        const tarjeta = `
            <div class="col">
                <div class="card h-100">
                    <img src="${personaje.imagen}" class="card-img-top" alt="${personaje.apodo}">
                    <div class="card-body">
                        <h5 class="card-title">${personaje.apodo}</h5>
                        <p class="card-text">Nombre: ${personaje.personaje}</p>
                        <p class="card-text">Casa: ${personaje.casaDeHogwarts}</p>
                        <p class="card-text">Interpretado por: ${personaje.interpretado_por}</p>
                    </div>
                </div>
            </div>`;
        contenedor.innerHTML += tarjeta;
    })
}

btnBuscar.addEventListener('click',()=>{

    fetch('https://fedeperin-harry-potter-api.herokuapp.com/personajes/')
    .then((response)=>response.json())
    .then((data)=>{
        crearHTML(filtrarCasa(data));
    })

})

function houseFilter(array) {
    let house = selectCasa.value;
    if (!house) {
        return array;
    } else {
        result = array.filter((e) => e.house == house);
        return result;
    }
}

function createHTML(array) {
    contenedor.innerHTML = ''
    container.innerHTML = ''
    array.forEach((personaje) => {
        const card = `
            <div class="col">
                <div class="card h-100">
                    <img src="${personaje.image}" class="card-img-top" alt="${personaje.name}">
                    <div class="card-body">
                        <h5 class="card-title">${personaje.name}</h5>
                        <p class="card-text">Especie: ${personaje.species}</p>
                        <p class="card-text">Nacimiento: ${personaje.dateOfBirth}</p>
                        <p class="card-text">Casa: ${personaje.house}</p>
                        <p class="card-text">Patronus: ${personaje.patronus}</p>
                        <p class="card-text">Interpretado por: ${personaje.actor}</p>
                    </div>
                </div>
            </div>`
        container.innerHTML += card
    })
}

async function traerDatos() {
    const respuesta = await fetch('./js/data.json');
    const data = await respuesta.json();
    createHTML(houseFilter(data));
}

searchBtn.addEventListener('click', () => {
    traerDatos();
})
