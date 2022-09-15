let recordar = document.getElementById("rememberMe");
let btnLogin = document.getElementById("btnLogin");
let btnVaciarLocalStorage = document.getElementById("btnVaciarLocalStorage");
let btnVaciarSessionStorage = document.getElementById("btnVaciarSessionStorage");

function guardarDatos(storage) {
    let user = document.getElementById('emailAdress').value;
    let pass = document.getElementById('password').value;

    const usuario = {
        'user': user,
        'pass': pass,
    }

    storage === 'sessionStorage' && sessionStorage.setItem('user', JSON.stringify(usuario));

    storage === 'localStorage' && localStorage.setItem('user', JSON.stringify(usuario));
}

function borrarDatos(storage) {
    storage.clear()
}

btnLogin.addEventListener('click', () => {
    if (recordar.checked) {
        guardarDatos('localStorage');
    } else {
        guardarDatos('sessionStorage');
    }
})

btnVaciarLocalStorage.addEventListener('click', () => {
    borrarDatos(localStorage);
    borrarDatos(sessionStorage);
})

btnVaciarSessionStorage.addEventListener('click', () => {
    borrarDatos(sessionStorage);
})