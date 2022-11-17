

function onRolloverDeCarga() {
    const TablaToRollover = OBJ1Selector.FatherDivTable;
    const BodyTableRollover = getQuerySelector(".", "tabla-de-viajes-rollover-de-carga", true);
    const ViajeId = parseInt(this.getAttribute("data-id"));
    const TablaViajesCargaAttr = getQuerySelector('.', 'fila-show-carga-peligrosa', false);
    const titleRolloverCarga = getQuerySelector("#", "title-rollover-de-carga", true);
    const FatherDivTable = OBJ1Selector.TablaRollover;
    solicitudesToRollSelected = null;

    if (generalFilaSaved === 0) {
        //Escondo la fila que se clickeo
        TablaViajesCargaAttr.forEach(function (fila) {
            let filaId = parseInt(fila.getAttribute("data-id"));
            if (filaId === ViajeId) {
                generalFilaSaved = ViajeId;
                setDisplay(fila, false);
            }
        });

        //Muestro todos los viajes existentes menos el que quiero hacer rollover
        Viajes.forEach(function (viaje, index) {

            if (ViajeId !== viaje.id && viaje.shipQuantityAvailable > 0) {
                createTableViajes(BodyTableRollover, viaje, index, 'rollover-to-this-fila-attr');
            } else {
                titleRolloverCarga.innerHTML += ' ' + viaje.shipName;
                viajeToRollSelected = viaje;
                solicitudesToRollSelected = viaje.shipRequest;
            }
        });

        addAFunctionToAFila(getQuerySelector('.', "rollover-to-this-fila-attr", false), addToThisViaje)
        getQuerySelector("#", "on-click-back-to-rollover-de-carga", true).addEventListener('click', onGoBackRolloverClick)

        setDisplay(FatherDivTable, true);
        setDisplay(TablaToRollover, true);
    } else {
        alert('Usted ya seleccionó un viaje actualmente');
    }
}

function addToThisViaje() {
    const TableToRollover = getQuerySelector("#", "father-container-table-to-rollover-viajes", true);
    let filaId = parseInt(this.getAttribute("data-id"));
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
                viajeToRollSelected.shipQuantityAvailable = viajeToRollSelected.shipQuantity;
                viajeToRollSelected.shipRequest.splice(0, viaje.shipRequest.length - 1);
                alert('La carga fue rolleada con exito');
            } else {
                alert(`Imposible rollear esta carga, supera la cantidad disponible de ${viaje.shipName}`)
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

function onGoBackRolloverClick() {
    const TableRolloverViajes = getQuerySelector("#", "father-container-table-to-rollover-viajes", true);
    const titleRolloverCarga = getQuerySelector("#", "title-rollover-de-carga", true);
    titleRolloverCarga.innerHTML = 'Rollover de carga:';
    viajeToRollSelected = null;
    solicitudesToRollSelected = null;
    generalFilaSaved = 0;
    setDisplay(TableRolloverViajes, false);
    onCreateCargaDeViajes();
}