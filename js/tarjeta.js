const boton = document.getElementById('boton');
const selectYear = document.querySelector('#year');
const selectMonth = document.querySelector('#month');
const nombreTitular = document.querySelector('.card-holder-input');
const numeroTarjeta = document.querySelector('.card-number-input');
const mesVencimiento = document.querySelector('.month-input');
const anioVencimiento = document.querySelector('.year-input');
const cvv = document.querySelector('.cvv-input');
const btnEnviar = document.querySelector('#btnEnviar');
const years = [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];
const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

years.forEach(element => {
    let option = `<option>${element}</option>`;
    selectYear.innerHTML += option;
});

months.forEach(element => {
    let option = `<option>${element}</option>`
    selectMonth.innerHTML += option;
});

numeroTarjeta.addEventListener('input', () => {
    document.querySelector('.card-number-box').innerText = numeroTarjeta.value;
});

nombreTitular.addEventListener('input', () => {
    document.querySelector('.card-holder-name').innerText = nombreTitular.value;
});

mesVencimiento.oninput = () => {
    document.querySelector('.exp-month').innerText = mesVencimiento.value;
}

anioVencimiento.oninput = () => {
    document.querySelector('.exp-year').innerText = anioVencimiento.value;
}

cvv.oninput = () => {
    document.querySelector('.cvv-box').innerText = cvv.value;
}

cvv.onmouseenter = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

cvv.onmouseleave = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

let cleave = new Cleave(numeroTarjeta, {
    creditCard: true,
    onCreditCardTypeChanged: (type) => {
        const logos = document.querySelectorAll('.cardLogo');
        logos.forEach(element => {
            element.src = `..//img/logos/${type}.png`
        })
    }
})

btnEnviar.addEventListener('click',(event)=>{
    event.preventDefault();
    const data = {
        nombre: nombreTitular.value,
        numeroTarjeta: numeroTarjeta.value,
        mes: mesVencimiento.value,
        anio: anioVencimiento.value,
        cvv: cvv.value
    };

    Swal.fire({
        title: '¿Deseas guardar los datos de la tarjeta?',
        showCancelButton: true,
        position: 'top-end',
        width: 300,
        confirmButtonText: 'Guardar'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.setItem('data', JSON.stringify(data))
            Swal.fire('Datos guardados', '', 'success');
            setTimeout(() => {
                location.reload();
            }, 2000);

        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                'Los datos no se guardaron.',
                '',
                'info'
            );
            setTimeout(() => {
                location.reload();
            }, 2000);

        }
    })
})