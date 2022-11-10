function onConsultarSolicitudes() {
  // Añade click a los botones generados por -> ConsultarSolicitudesPendientes
  buildConsultarSolicitudes();
  getCancelBtns();
}

function buildConsultarSolicitudes() {
  OBJ1Selector["requestTable"] = getQuerySelector("#", "user-requests-table", true);
  OBJ1Selector.requestTable.innerHTML = "";
  
  if (userLogged.userEnabled) {
    Solicitudes.forEach(function (solicitud) {    
      let supplierName = getSupplierName(solicitud);  
      if (solicitud.requestUserId === userLoggedId && solicitud.requestStatus === 0) { 
        createPendingRequestTable(solicitud.requestOrigin, solicitud.requestQuantity, supplierName, solicitud.requestDescription, solicitud.requestType, solicitud.id)
      }
    });    
  }else{
    alert('Su usuario no esta habilitado');//Consultar si este mensaje va
  }

}

function getSupplierName(solicitud) {
  let supplierName = "";

  Empresas.forEach(function (empresa) {
    if (solicitud.requestSupplierId === empresa.id) {      
      supplierName = empresa.supplierName
    }
  });

  return supplierName;
}

function createPendingRequestTable(requestOrigin, requestQuantity, supplierName, requestDescription, requestType, id) {  
  OBJ1Selector.requestTable.innerHTML += `
                <tr>
                  <td class="column-manifest-td">${requestOrigin}</td>
                  <td class="column-manifest-td">${requestQuantity}</td>
                  <td class="column-manifest-td">${supplierName}</td>
                  <td class="column-manifest-td">${requestDescription}</td>
                  <td class="column-manifest-td">${requestType}</td>
                  <td class="column-manifest-td">
                  <input type="button" class="cancelar-solicitud-btn" data-id="${id}" value="Cancelar"/>
                  </td>
                </tr>
              `;
}