function getCancelBtns() {
  const CancelarSolicitudBtn = getQuerySelector(".", "cancelar-solicitud-btn", false);
  CancelarSolicitudBtn.forEach(function (button) {
    button.addEventListener("click", onCancelarSolicitud);
  });
}

function onCancelarSolicitud() {
  const id = Number(this.getAttribute("data-id"));
  onCambiarEstado(id);
  onConsultarSolicitudes();  
}

function onCambiarEstado(id) {
  Solicitudes.forEach(function (solicitud) {

    if (solicitud.id === id) {
      solicitud.requestStatus = 2;
    }
  });
}
