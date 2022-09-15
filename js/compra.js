const btnDelete = document.getElementById('btnDelete');

btnDelete.addEventListener('click', () => {
    Swal.fire({
        title: '¿Estás seguro de vaciar el carrito con los productos seleccionados hasta el momento?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText:'Sí, seguro.',
        cancelButtonText:'No, quiero seguir comprando.',
        
    }).then((result)=>{
        if(result.isConfirmed){
            Swal.fire({
                title:'VACÍO',
                icon:'sucess',
                text:'El carrito ha sido vaciado.'
            })
        }
    })
})