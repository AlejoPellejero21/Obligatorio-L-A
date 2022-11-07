
function getCancelBtns() {
    const CancelarSolicitudBtn = document.querySelectorAll('.cancelar-solicitud-btn');
    CancelarSolicitudBtn.forEach(function (button) {
        button.addEventListener('click', onCancelarSolicitud);
    });


}

function onCancelarSolicitud() {
    const id = Number(this.getAttribute('data-id'));
    onCambiarEstado(id);
    buildConsultarSolicitudes();
    getCancelBtns();
}

function onCambiarEstado(id) {
    Solicitudes.forEach(function (solicitud) {
        console.log(solicitud.id, id)
        if (solicitud.id === id) {
            solicitud.requestStatus = 2
        }

    });

}



