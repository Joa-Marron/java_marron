const jsonBtn = document.getElementById('jsonBtn');

function cargarJSON() {
    fetch('../js/base.json')
        .then(function (resultado) {
            return resultado.json();
        })
        .then(function (data) {
            listaHTML = '';
            data.forEach(function (animal) {
                listaHTML += `
            <li>Nombre:${animal.nombre} <br> Especie:${animal.especie}<br> Género:${animal.genero}<br> Edad:${animal.edad}</li>
            <br>
            <img src="${animal.img}">
            `;
            })
            document.getElementById('famosos').innerHTML = listaHTML;
        })
        .catch(err => console.error(err));
}

jsonBtn.addEventListener('click', cargarJSON);

/*---------------------------------------------------------------------------------*/

fetch('../js/base.json')
    .then(response => responde.json())
    .then(data => {
        pintarCards(data)
    })

function pintarCards(data) {
    let fakeSeleccion = document.getElementById('jsonBtn')
    data.forEach(animal => {
        fakeSeleccion.innerHTML += `<li>Nombre:${animal.nombre} <br> Especie:${animal.especie}<br> Género:${animal.genero}<br> Edad:${animal.edad}</li>
        <br>`
    });
}