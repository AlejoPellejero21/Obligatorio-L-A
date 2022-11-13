function onCreateCargaPeligrosa() {
    OBJ1Selector['TitleCargaPeligrosa'] = getQuerySelector('#', 'title-carga-peligrosa', true);
    const TablaViajesCargaAttr = getQuerySelector('#', 'tabla-de-viajes-carga-p', true);
    TablaViajesCargaAttr.innerHTML = '';

    if (Viajes.length > 0) {
        Viajes.forEach(function (viaje) {
            TablaViajesCargaAttr.innerHTML += `
            <tr class='fila-show-carga-peligrosa' data-id='${viaje.id}'>                
                <td class="column-manifest-td">${viaje.shipName}</td>
                <td class="column-manifest-td">${viaje.shipQuantity}</td>                
                <td class="column-manifest-td">${viaje.shipSupplierId}</td>
                <td class="column-manifest-td">${viaje.shipDate}</td>
            </tr>
            `
        });
        const FilaViajeAttr = getQuerySelector('.', "fila-show-carga-peligrosa", false);

        FilaViajeAttr.forEach(function (attr) {
            attr.addEventListener('click', onViajeSelected)
        });

    } else {
        alert('No existen ningun viaje creado')
    }
}

function onViajeSelected() {
    OBJ1Selector['ListaDeViajesAttr'] = getQuerySelector("#", 'lista-de-viajes-actuales', true);
    OBJ1Selector['ListaCargaPeligrosa'] = getQuerySelector('#', 'container-table-carga-peligrosa', true);    
    const AttrId = parseInt(this.getAttribute("data-id"));
    const CargaPeligrosa = getQuerySelector('#', 'tabla-carga-peligrosa', true);
    const ButtonGoBack = getQuerySelector('#', 'on-click-back-to', true);
    const TitleCargaPeligrosa = OBJ1Selector.TitleCargaPeligrosa;
    let noExist = false;
    CargaPeligrosa.innerHTML = '';

    Viajes.forEach(function (viaje) {
        let shipRequests = viaje.shipRequest;
        if (viaje.id === AttrId && shipRequests.length > 0) {

            shipRequests.forEach(function (solicitud) {
                if (solicitud.requestType === 2) {
                    noExist = true;
                    debugger;
                    TitleCargaPeligrosa.innerHTML += ` ${viaje.shipName}`;
                    setDisplay(OBJ1Selector.ListaDeViajesAttr, false);
                    setDisplay(OBJ1Selector.ListaCargaPeligrosa, true);
                    CargaPeligrosa.innerHTML += tableRequestinnerHTML(CargaPeligrosa, solicitud, 'dng');
                }
            });

            if (!noExist) {
                alert('Este viaje no cuenta con cargas de tipo: CARGA_PELIGROSA');
            }
        }
    });

    ButtonGoBack.addEventListener('click', onGoBackClick);

}

function onGoBackClick() {
    OBJ1Selector.TitleCargaPeligrosa.innerHTML = 'Lista de Carga Peligrosa:';
    setDisplay(OBJ1Selector.ListaDeViajesAttr, true);
    setDisplay(OBJ1Selector.ListaCargaPeligrosa, false);
}