function createRquestTable() {

    if (OBJ1Selector.RequestPendingTable && Solicitudes) {
        Solicitudes.forEach(function (solicitud) {
            console.log(solicitud);

            OBJ1Selector.RequestPendingTable.innerHtml += `
            <td class="column-manifest-td unique-column-left-al add-plus-al">+</td>
            <td class="column-manifest-td">${solicitud.requestOrigin}</td>
            <td class="column-manifest-td">${solicitud.requestQuantity}</td>
            <td class="column-manifest-td">${solicitud.requestStatus}</td>
            <td class="column-manifest-td">${solicitud.requestDescription}</td>
            <td class="column-manifest-td">${solicitud.requestType}</td>
        `
        });
    }
}