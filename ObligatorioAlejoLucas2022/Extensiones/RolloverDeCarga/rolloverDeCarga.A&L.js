function onRolloverDeCarga() {
    const TablaToRollover = OBJ1Selector.FatherDivTable;
    const BodyTableRollover = getQuerySelector('.', 'tabla-de-viajes-rollover-de-carga', true);
    const ViajeId = parseInt(this.getAttribute('data-id'));
    const TablaViajesCargaAttr = getQuerySelector('.', 'fila-show-carga-peligrosa', false);
    const FatherDivTable = OBJ1Selector.TablaRollover;
    solicitudesToRollSelected = null;

    TablaViajesCargaAttr.forEach(function (fila) {
        let filaId = parseInt(fila.getAttribute('data-id'));
        if (filaId === ViajeId) {
            setDisplay(fila, false);
        }
    });

    //Muestro todos los viajes existentes menos el que quiero hacer rollover
    Viajes.forEach(function (viaje, index) {
        if (ViajeId !== viaje.id && viaje.shipQuantityAvailable > 0) {
            createTableViajes(BodyTableRollover, viaje, index, 'rollover-to-this-fila-attr');
        } else {
            viajeToRollSelected = viaje;
            solicitudesToRollSelected = viaje.shipRequest;
        }
    });

    addAFunctionToAFila(getQuerySelector('.', 'rollover-to-this-fila-attr', false), addToThisViaje);

    setDisplay(FatherDivTable, true);
    setDisplay(TablaToRollover, true);
}

function addToThisViaje() {
    const TableToRollover = getQuerySelector('#', 'father-container-table-to-rollover-viajes', true);
    let filaId = parseInt(this.getAttribute('data-id'));
    let quantityRequests = getQuantitySelected();

    Viajes.forEach(function (viaje) {
        if (viaje.id === filaId) {
            if (quantityRequests <= viaje.shipQuantityAvailable) {
                //Se agregan las solicitudes del viaje a rollear
                viaje.shipQuantityAvailable -= quantityRequests;
                solicitudesToRollSelected.forEach(function (solicitud) {
                    setPush(viaje.shipRequest, solicitud);
                });
                setDisplay(TableToRollover, false);
                viajeToRollSelected.shipRequest.splice(0, viaje.shipRequest.length - 1);
                alert('La carga fue rolleada con exito');
            } else {
                alert(`Imposible rollear esta carga, supera la cantidad disponible de ${viaje.shipName}`);
            }
        }
    });
}

function getQuantitySelected() {
    let quantity = 0;

    solicitudesToRollSelected.forEach(function (solicitud) {
        quantity += solicitud.requestQuantity;
    });

    return quantity;
}
