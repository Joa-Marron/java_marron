const infoForm = document.querySelector('#formulario');
const recordar = document.querySelector('#rememberMe');


function guardarDatos() {
    let username = document.querySelector('#nombre').value
    let userFname = document.querySelector('#apellido').value

    const usuario = {
        name: username,
        fName: userFname
    }

    localStorage.setItem('user', JSON.stringify(usuario));

}


infoForm.addEventListener('submit', function handleSubmit(event) {
    event.preventDefault();
    let name = document.querySelector('#nombre').value
    let firstName = document.querySelector('#apellido').value
    let number = document.querySelector('#numero').value
    let mensaje = document.querySelector('#mensaje').value

    const person = {

        name,

        firstName,

        number,

        mensaje

    }
    localStorage.setItem('data', JSON.stringify(person));
    infoForm.reset();
    
})

recordar.addEventListener('click', () => {
    Swal.fire({
        title: '¿Deseas guardar tus datos?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, seguro',
        cancelButtonText: 'No, no quiero'
    }).then((result)=>{
        if(result.isConfirmed){
            guardarDatos();
            Swal.fire({
                title: 'Tus datos se guardaron exitosamente',
                icon: 'success'
            })
        }
    })
})


/*------------------------------------------------------------------------------------------------*/

let limite = 120;
const miTexto = document.querySelector('.texto');
const resultado = document.getElementById('resul');
resultado.textContent = `o/${limite}`;

function cambiarClases(elemento, claseA, claseB) {
    elemento.classList.add(claseA);
    elemento.classList.remove(claseB);

}

function textArea(cajaTexto, cajaLimite, claseA, claseB) {
    const textLength = miTexto.value.length;
    cajaLimite.textContent = `${textLength}/${limite}`

    textLength > limite ? cambiarClases(cajaTexto, claseA, claseB) : cambiarClases(cajaTexto, claseB, claseA);

}


miTexto.addEventListener('input', () => {
    textArea(miTexto, resultado, 'sobrepasa', 'noSobrepasa');
})