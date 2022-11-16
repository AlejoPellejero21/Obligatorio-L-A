function onCrearSolicitudDeCarga() {
  const TypeOfChargeAttr = getQuerySelector("#", "select-type-shippment-importador", true);
  const QuantityOfContainersAttr = getQuerySelector("#", "input-quantity-containers-importador", true);
  const ArrivePortAttr = getQuerySelector("#", "arrive-point", true);
  const LineOfChargeRequestedAttr = getQuerySelector("#", "select-line-of-charge", true);
  const ShippmentDescriptionAttr = getQuerySelector("#", "input-shippment-description", true);
  const CurrentUser = userLogged;
  const TypeOfCharge = TypeOfChargeAttr.value;
  const QuantityOfContainers = QuantityOfContainersAttr.value;
  const ArrivePort = ArrivePortAttr.value;
  const LineOfChargeRequested = LineOfChargeRequestedAttr.value;
  const ShippmentDescription = ShippmentDescriptionAttr.value;
  let id = 0;
  let requestCreated = {};

  if (isEmpty(QuantityOfContainers) || isEmpty(ShippmentDescription) || isNaN(parseInt(QuantityOfContainers)) || TypeOfCharge === 'X' || ArrivePort === 'X' || LineOfChargeRequested === 'X') {
    alert('Complete los campos correctamente! por favor');
  } else {
    if (userLogged.userEnabled) {      
      id = getIdAutonumerico();
      //agrega la informacion de la solicitud a una variable    
      requestCreated = new Solicitud(id, parseInt(TypeOfCharge), ShippmentDescription, ArrivePort, parseInt(QuantityOfContainers), parseInt(LineOfChargeRequested), 0, CurrentUser.id);

      //añade la solicitud a las solicitudes del importador logeado    
      setPush(Solicitudes, requestCreated);
      setPush(CurrentUser.userRequests, requestCreated);

      TypeOfChargeAttr.value = "X";
      QuantityOfContainersAttr.value = "";
      ArrivePortAttr.value = "X";
      LineOfChargeRequestedAttr.value = "X";
      ShippmentDescriptionAttr.value = "";
      alert("La solicitud ha sido creada con exito");
      onConsultarSolicitudes();
    } else {
      alert('Su usuario no esta habilitado');
    }
  }

}
