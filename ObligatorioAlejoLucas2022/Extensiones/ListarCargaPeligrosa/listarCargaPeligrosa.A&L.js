function onCreateCargaDeViajes() {
    OBJ1Selector['TitleCargaPeligrosa'] = getQuerySelector('#', 'title-carga-peligrosa', true);
    OBJ1Selector['TitleManifiestoDeCarga'] = getQuerySelector('#', 'title-manifiesto-de-carga', true);
    const TablaViajesCargaAttr = getQuerySelector('.', 'tabla-de-viajes-carga-p', false);


    if (Viajes.length > 0) {
        //Se recorren los viajes 
        Viajes.forEach(function (viaje, index) {
            //Se recorren los atributos tablas para viajes
            //Si la empresa del viaje es la misma que la empresa que esta logeada
            if (viaje.shipSupplierId === userLogged.id) {
                TablaViajesCargaAttr.forEach(function (attr) {
                    createTableViajes(attr, viaje, index);
                });
            }
        });
        const FilaViajeAttr = getQuerySelector('.', "fila-show-carga-peligrosa", false);

        if (currentView === CargaPeligrosaView) {
            FilaViajeAttr.forEach(function (attr) {
                attr.addEventListener('click', onDangerViajeSelected)
            });
        } else {
            FilaViajeAttr.forEach(function (attr) {
                attr.addEventListener('click', onViajeSelected)
            });
        }

    } else {
        alert('No existen ningun viaje creado')
    }

}

//Esta funcion es para la vista CargaPeligrosaView
function onDangerViajeSelected() {
    OBJ1Selector['ListaDeViajesAttr'] = getQuerySelector("#", 'lista-de-viajes-actuales', true);
    OBJ1Selector['ListaCargaPeligrosa'] = getQuerySelector('#', 'container-table-carga-peligrosa', true);
    const AttrId = parseInt(this.getAttribute("data-id"));
    const CargaPeligrosa = getQuerySelector('#', 'tabla-carga-peligrosa', true);
    const ButtonGoBack = getQuerySelector('#', 'on-click-back-to', true);
    CargaPeligrosa.innerHTML = '';

    //Esto se hace ya que hay dos view que muestran tabla de viajes
    //AttrId es igual al viaje que se clickeo
    buildDifferntTables(AttrId, CargaPeligrosa);

    ButtonGoBack.addEventListener('click', onGoBackClick);
}

//Esta funcion te envia a la view anterior y setea el titulo
function onGoBackClick() {
    if (currentView === CargaPeligrosaView) {
        OBJ1Selector.TitleCargaPeligrosa.innerHTML = 'Lista de Carga Peligrosa:';
        setDisplay(OBJ1Selector.ListaDeViajesAttr, true);
        setDisplay(OBJ1Selector.ListaCargaPeligrosa, false);
    } else {
        OBJ1Selector.TitleManifiestoDeCarga.innerHTML = 'Manifiesto de Carga:';
        setDisplay(OBJ1Selector.ListaManifiestoDeCarga, false);
        setDisplay(OBJ1Selector.ListaDeViajesManifestAttr, true);

    }
}

function createTableViajes(attr, viaje, index) {
    if (index === 0) {
        attr.innerHTML = '';
    }

    attr.innerHTML += `
                <tr class='fila-show-carga-peligrosa' data-id='${viaje.id}'>                
                    <td class="column-manifest-td">${viaje.shipName}</td>
                    <td class="column-manifest-td">${viaje.shipQuantity}</td>                
                    <td class="column-manifest-td">${viaje.shipSupplierId}</td>
                    <td class="column-manifest-td">${viaje.shipDate}</td>
                </tr>
                `

    return attr.innerHTML;
}

//Esta funcion arma una tabla de viajes
function buildDifferntTables(AttrId, attr) {
    Viajes.forEach(function (viaje) {
        let shipRequests = viaje.shipRequest;
        if (viaje.id === AttrId && shipRequests.length > 0) {
            showTableForCargas(shipRequests, viaje, attr);
        }
    });
}

//Dependiendo de la view esta funcion arma la lista de solicitudes para un viaje
function showTableForCargas(shipRequests, viaje, attr) {
    const TitleCarga = currentView === CargaPeligrosaView ? OBJ1Selector.TitleCargaPeligrosa : OBJ1Selector.TitleManifiestoDeCarga;
    let noExist = false;
    //Se recorren las solicitudes del viaje seleccionado
    shipRequests.forEach(function (solicitud, index) {
        if (currentView === CargaPeligrosaView) {
            if (solicitud.requestType === 2) {
                noExist = true;
                if (index === 0) {
                    TitleCarga.innerHTML += ` ${viaje.shipName}`;
                }
                setDisplay(OBJ1Selector.ListaDeViajesAttr, false);
                setDisplay(OBJ1Selector.ListaCargaPeligrosa, true);
                attr.innerHTML += tableRequestinnerHTML(solicitud, 'dng');
            }
        } else {
            noExist = true;
            if (index === 0) {
                TitleCarga.innerHTML += ` ${viaje.shipName}`;
            }
            setDisplay(OBJ1Selector.ListaDeViajesManifestAttr, false);
            setDisplay(OBJ1Selector.ListaManifiestoDeCarga, true);
            attr.innerHTML += tableRequestinnerHTML(solicitud, 'dng');
        }
    });

    if (!noExist) {
        alert('Este viaje no cuenta con cargas de tipo: CARGA_PELIGROSA');
    }
}