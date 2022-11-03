function createRquestTable() {
    const RequestPendingTable = getQuerySelector("#", "tabla-asignar-solicitud-de-carga", true);
    RequestPendingTable.innerHTML = '';


    Solicitudes.forEach(function (solicitud) {
        let rquestStatus = solicitud.requestStatus;
        let statusText = rquestStatus === 0 && 'Pendiente';
        let id = solicitud.id;
        let requestTypeText = getRequestText();        

        if (id && rquestStatus === 0) {
            RequestPendingTable.innerHTML += `
                <tr>
                    <td class="column-manifest-td unique-column-left-al add-plus-al button-asignar-solicitud" data-id='${id}'>+</td>
                    <td class="column-manifest-td">${solicitud.requestOrigin}</td>
                    <td class="column-manifest-td">${solicitud.requestQuantity}</td>
                    <td class="column-manifest-td">${statusText}</td>
                    <td class="column-manifest-td">${solicitud.requestDescription}</td>
                    <td class="column-manifest-td">${requestTypeText}</td>
                </tr>
            `;
        }
    });

    const BtnsAsignarSolicitud = getQuerySelector('.', 'button-asignar-solicitud', false);
    BtnsAsignarSolicitud.forEach(function (btn) {
        btn.addEventListener('click', onAsignarSolicitudClick)
    });

}

function onAsignarSolicitudClick() {
    var requestId = parseInt(this.dataset.id);
    
}


function getRequestText(number) {
    var requestTypeText = '';

    switch (number) {
        case 0:
            requestTypeText = 'CARGA_GENERAL'
            break;
        case 1:
            requestTypeText = 'REFRIGERADO'
            break;
        default:
            requestTypeText = 'CARGA_PELIGROSA'
            break;
    }

    return requestTypeText;
}