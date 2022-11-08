function onConsultarSolicitudes() {
  //}
  // Añade click a los botones generados por -> ConsultarSolicitudesPendientes
  buildConsultarSolicitudes();
  getCancelBtns();
}

function buildConsultarSolicitudes(buscador) {
  OBJ1Selector["requestTable"] = getQuerySelector("#", "user-requests-table", true);
  OBJ1Selector["requestTable"].innerHTML = "";

  let supplierName = "";

  // if (importador.userEnabled) {
  Solicitudes.forEach(function (solicitud) {
    Empresas.forEach(function (empresa) {
      if (solicitud.requestSupplierId == empresa.id) {
        return (supplierName = empresa.supplierName);
      }
      return supplierName;
    });

    if (solicitud.requestUserId == userLoggedId && solicitud.requestStatus == 0) {
      OBJ1Selector["requestTable"].innerHTML += `
                <tr>
                  <td class="column-manifest-td">${solicitud.requestOrigin}</td>
                  <td class="column-manifest-td">${solicitud.requestQuantity}</td>
                  <td class="column-manifest-td">${supplierName}</td>
                  <td class="column-manifest-td">${solicitud.requestDescription}</td>
                  <td class="column-manifest-td">${solicitud.requestType}</td>
                  <td class="column-manifest-td">
                  <input type="button" class="cancelar-solicitud-btn" data-id="${solicitud.id}" value="Cancelar"/>
                  </td>
                </tr>
              `;
    }
  });
}
