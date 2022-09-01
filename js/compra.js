const btnDelete = document.getElementById('btnDelete');

btnDelete.addEventListener('click', () => {
    Swal.fire({
        title: '¿Estás seguro de eliminar la compra hasta el momento?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText:'Sí, seguro.',
        cancelButtonText:'No, quiero seguir comprando.',
        
    }).then((result)=>{
        if(result.isConfirmed){
            Swal.fire({
                title:'Eliminado',
                icon:'sucess',
                text:'El producto ha sido eliminado.'
            })
        }
    })
})