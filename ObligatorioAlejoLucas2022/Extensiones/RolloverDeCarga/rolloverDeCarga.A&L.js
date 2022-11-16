function onRolloverDeCarga() {
    const TablaToRollover = OBJ1Selector.FatherDivTable;
    const BodyTableRollover = getQuerySelector(".", "tabla-de-viajes-rollover-de-carga", true);
    const ViajeId = parseInt(this.getAttribute("data-id"));
    const TablaViajesCargaAttr = getQuerySelector('.', 'fila-show-carga-peligrosa', false);
    const FatherDivTable = OBJ1Selector.TablaRollover;

    TablaViajesCargaAttr.forEach(function (fila) {
        let filaId = parseInt(fila.getAttribute("data-id"));
        if (filaId === ViajeId) {
            setDisplay(fila, false);
        }
    });

    //Muestro todos los viajes existentes menos el que quiero hacer rollover
    Viajes.forEach(function (viaje, index) {
        if (ViajeId !== viaje.id) {
            createTableViajes(BodyTableRollover, viaje, index, 'rollover-to-this-fila-attr');
        }
    });

    addAFunctionToAFila(getQuerySelector('.', "rollover-to-this-fila-attr", false), addToThisViaje)

    setDisplay(FatherDivTable, true);
    setDisplay(TablaToRollover, true);
}

function addToThisViaje() {
    debugger;
}