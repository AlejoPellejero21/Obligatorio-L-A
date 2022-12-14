function createRequestTable() {
    const RequestPendingTable = getQuerySelector('#', 'tabla-asignar-solicitud-de-carga', true);
    OBJ1Selector['RequestPendingTable'] = RequestPendingTable;
    RequestPendingTable.innerHTML = '';

    Solicitudes.forEach(function (solicitud) {
        let rquestStatus = solicitud.requestStatus;
        let id = solicitud.id;

        //Si existe la solicitud y es de tipo pendiente, ademas el usuario loggeado es el asignado
        if (id && rquestStatus === 0 && solicitud.requestSupplierId === userLogged.id) {
            RequestPendingTable.innerHTML += tableRequestinnerHTML(solicitud, 'add');
        }
    });

    const BtnsAsignarSolicitud = getQuerySelector('.', 'button-asignar-solicitud', false);
    BtnsAsignarSolicitud.forEach(function (btn) {
        btn.addEventListener('click', onAsignarSolicitudClick);
    });
}

function tableRequestinnerHTML(solicitud, type) {
    let newTableText = '';
    newTableText += `<tr data-id='${solicitud.id}'>`;

    if (type === 'add') {
        newTableText += `                    
      <td class="column-manifest-td unique-column-left-al add-plus-al button-asignar-solicitud" data-id='${solicitud.id}'>+</td>      
`;
    }

    newTableText += `
      <td class="column-manifest-td">${solicitud.requestOrigin}</td>
      <td class="column-manifest-td">${solicitud.requestQuantity}</td>
      <td class="column-manifest-td">${getStatusText(solicitud.requestStatus)}</td>
      <td class="column-manifest-td">${solicitud.requestDescription}</td>
      <td class="column-manifest-td">${getRequestText(solicitud.requestType)}</td>
  </tr>`;

    return newTableText;
}

function getStatusText(rquestStatus) {
    let statusText = '';

    switch (rquestStatus) {
        case 0:
            statusText += 'Pendiente';
            break;
        case 1:
            statusText += 'Aprobada';
            break;
        case 2:
            statusText += 'Cancelada';
            break;
        default:
            statusText += 'Ignorada';
            break;
    }

    return statusText;
}

function onAsignarSolicitudClick() {
    const RequestPendingTable = OBJ1Selector.RequestPendingTable;
    let requestId = parseInt(this.dataset.id);
    let viajesTable = '';
    let childrenClicked;

    if (RequestPendingTable && RequestPendingTable.children) {
        let childernArrays = RequestPendingTable.children;
        viajesTable = createViajesTable();
        childrenClicked = getChildrenTable(childernArrays, requestId);
        requestToAsign = requestId;

        childrenClicked.innerHTML += `<div id="dropdown-viajes-${requestId}" class="dropdown-asignar-solicitud-viaje">
        <span id='exit-dropdown-${requestId}' class='exit-dropdown-viajes'>X</span>
        <h3 class="title-seleccione-viaje">Seleccione un Viaje</h3>
        ${viajesTable}
        </div>`;
    }

    const CloseDropdownViajes = getQuerySelector('#', `exit-dropdown-${requestId}`, true);
    OBJ1Selector['DropdownViajes'] = getQuerySelector('#', `dropdown-viajes-${requestId}`, true);
    OBJ1Selector['ButtonViajeSelected'] = getQuerySelector('.', 'container-data-info-viajes', false);
    CloseDropdownViajes.addEventListener('click', onCloseDropdownClick);

    OBJ1Selector.ButtonViajeSelected.forEach(function (buttonViaje) {
        buttonViaje.addEventListener('click', onButtonViajeToAddClick);
    });
}

//Close Dropdown
function onCloseDropdownClick() {
    setDisplay(OBJ1Selector.DropdownViajes, false);
    //Se vuelve a crear la tabla para que no quede el dropdown escondido
    createRequestTable();
}

//Crear la tabla de viajes
function createViajesTable() {
    let table = '';

    Viajes.forEach(function (viaje) {
        //Valido de que la cantidad sea mayor a 0
        //Valido de que los viajes esten asignado al usuario actual
        if (viaje.shipQuantityAvailable > 0 && viaje.shipSupplierId === userLogged.id) {
            table += `
            <div class="container-data-info-viajes" data-id='${viaje.id}'>            
                <span class="column-manifest-td">${viaje.shipName}</span>
                <span class="column-manifest-td">Max: ${viaje.shipQuantity}</span>
                <span class="column-manifest-td">Disponible: ${viaje.shipQuantityAvailable}</span>
                <span class="column-manifest-td">${viaje.shipDate}</span>        
            </div>
            `;
        }
    });

    return table;
}
/**
 *
 * @param {object} childernArrays
 * @param {number} requestId
 * @returns object || undefined
 */
function getChildrenTable(childernArrays, requestId) {
    let thisChildren; //Solicitud clickeada
    let isChildrenClicked = false;
    let index = 0;

    //Obtengo la linea que fue clickeada
    while (index < childernArrays.length && !isChildrenClicked) {
        let childrenDataset = childernArrays[index].dataset;

        if (childrenDataset && parseInt(childrenDataset.id) === requestId) {
            thisChildren = childernArrays[index];
            isChildrenClicked = true;
        }
        index++;
    }

    return thisChildren;
}

function onButtonViajeToAddClick() {
    const SolicitudToAsignar = getSolicitudById(requestToAsign);
    let quantityToAdd = SolicitudToAsignar.requestQuantity;
    let viajeId = parseInt(this.dataset.id);
    let index = 0;
    let isViajeAssigned = false;

    while (index < Viajes.length && !isViajeAssigned) {
        let viajeSelected = Viajes[index];
        if (viajeSelected.id === viajeId && quantityToAdd <= viajeSelected.shipQuantityAvailable) {
            viajeSelected.shipQuantityAvailable -= quantityToAdd;
            SolicitudToAsignar.requestStatus = 1;
            setPush(Viajes[index].shipRequest, SolicitudToAsignar);
            isViajeAssigned = true;
        }
        index++;
    }

    if (isViajeAssigned) {
        alert('La solicitud fue agregada con exito');
        createRequestTable();
    } else {
        alert('Imposible asignar la solicitud. Excedi?? cantidad disponible!');
    }
}
