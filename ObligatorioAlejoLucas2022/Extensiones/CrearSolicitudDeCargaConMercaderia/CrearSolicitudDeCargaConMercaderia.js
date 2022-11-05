function onCrearSolicitudDeCarga() {
    const TypeOfCharge = getQuerySelector('#', 'select-type-shippment-2', true).value
    const QuantityOfContainers = getQuerySelector('#', 'input-quantity-containers-2', true).value
    const ArrivePort = getQuerySelector('#', 'arrive-point', true).value
    const LineOfChargeRequested = getQuerySelector('#', 'select-line-of-charge', true).value
    const ShippmentDescription = getQuerySelector('#', 'input-shippment-description', true).value

    let id = 0;
    let requestCreated = {};

    id = getIdAutonumerico();
    //agrega la informacion de la solicitud a una variable
    requestCreated = new Solicitud(id, TypeOfCharge, ShippmentDescription, ArrivePort, parseInt(QuantityOfContainers), parseInt(LineOfChargeRequested), 0, userLogged.id);

    //añade la solicitud a las solicitudes
    setPush(Solicitudes, requestCreated)
    //añade la solicitud a las solicitudes del importador logeado
    setPush(userLogged.userRequests, requestCreated)

    /*TypeOfCharge.value = "X";
    QuantityOfContainers = "";
    ArrivePort = "0";
    LineOfChargeRequested = "0";
    ShippmentDescription = "";*/




    console.log(Solicitudes)
    console.log(Importadores)

}