function crearUnViajeDeUnBuque() {
    const InputNombreBuque = getQuerySelector('#', 'input-nombre-del-buque', true);
    const InputCantidadMaxContenedores = getQuerySelector('#', 'input-cantidad-max-contenedores', true);
    const InputLineaDeCarga = getQuerySelector('#', 'select-line-de-carga', true);
    const InputFechaDeLlegada = getQuerySelector('#', 'input-fecha-de-llegada', true);

    const NombreBuque = InputNombreBuque.value;
    const CantidadMaxContenedores = parseInt(InputCantidadMaxContenedores.value);
    const LineaDeCarga = InputLineaDeCarga.value;
    const FechaDeLlegada = InputFechaDeLlegada.value;
    const CurrentUser = userLogged;
    let viajeCreated;
    let id;

    if (parseInt(OBJ1Selector.SelectLogin.value) === 1) {
        if (isEmpty(NombreBuque) || isEmpty(CantidadMaxContenedores) || LineaDeCarga === 'X' || isEmpty(FechaDeLlegada)) {
            alert(ErrorCamposCrearViaje); //Cambiar por un <p>
        } else {
            const splitFechaDeLLegada = FechaDeLlegada.split('-');
            const monthSelected = splitFechaDeLLegada[1];
            const yearSelected = splitFechaDeLLegada[0];
            let fechaLlegadaSplited = parseInt(yearSelected + monthSelected + String(parseFloat(splitFechaDeLLegada[2])));            
            if (fechaLlegadaSplited <= parseInt(currentDate) || monthSelected < todayMonth || yearSelected < todayYear) {
                alert(ErrorFechaPasada); //Cambiar por un <p>
            } else {
                id = getIdAutonumerico();
                viajeCreated = new Viaje(id, NombreBuque, CantidadMaxContenedores, FechaDeLlegada, parseInt(LineaDeCarga));

                /*Agregar nuevo viaje */
                setPush(CurrentUser.supplierTrips, viajeCreated);
                setPush(Viajes, viajeCreated);

                /*Setear en Default*/
                InputNombreBuque.value = '';
                InputFechaDeLlegada.value = 'yyyy-MM-dd';
                InputCantidadMaxContenedores.value = '';
                InputLineaDeCarga.value = 'X';
                alert(SuccesViajeCreado); //Cambiar por un <p>
            }
        }
    }
}
