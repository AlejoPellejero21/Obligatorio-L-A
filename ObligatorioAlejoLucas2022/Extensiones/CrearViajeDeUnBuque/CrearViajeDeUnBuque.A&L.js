/* function crearUnViajeDeUnBuque() {
    const InputNombreBuque = getQuerySelector("#", "input-nombre-del-buque", true).value;
    const CantudadMaxContenedores = getQuerySelector("#", "input-cantidad-max-contenedores", true).value;
    const LineaDeCarga = getQuerySelector("#", "select-line-de-carga", true).value;
    const FechaDeLlegada = getQuerySelector("#", "input-fecha-de-llegada", true).value;

    if (InputNombreBuque === null) {
        //Validar los campos que no esten vacio
        //Validar Select que no sea valor default
        //Validar que la fecha sea a partir de hoy
    } else {
        let id = idAutonumericoViaje(Viajes);

        //Obtener mi usuario
    }


    console.log(Viajes)



} */

function idAutonumericoViaje(viajes) {
    let newId;

    viajes.forEach(function (viaje) {
        if (!newId) {
            newId = viaje.shipId;
        } else if (viaje.shipId > newId) {
            newId = viaje.shipId;
        }
    });

    return newId
}