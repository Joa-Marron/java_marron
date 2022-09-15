const jsonBtn = document.getElementById('jsonBtn');

function cargarJSON () {
    fetch('../base.json')
    .then(function(resultado){
        return resultado.json();
    })
    .then(function(data){
        listaHTML = '';
        data.forEach(function(animal){
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

jsonBtn.addEventListener('click',cargarJSON);