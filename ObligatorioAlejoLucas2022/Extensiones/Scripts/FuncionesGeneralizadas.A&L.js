/**
 *
 * @param {string} type
 * @param {string} id
 * @param {boolean} unique
 * @returns null || object
 */

function getQuerySelector(type, id, unique) {
  let getAttribute = null;

  if (unique) {
    getAttribute = document.querySelector(`${type}${id}`);
  } else {
    getAttribute = document.querySelectorAll(`${type}${id}`);
  }

  return getAttribute;
}

/**
 *
 * @param {object} attr
 * @param {boolean} display
 */

function setDisplay(attr, display) {
  if (display) {
    attr.style.display = "flex";
  } else {
    attr.style.display = "none";
  }
}

/**
 * Se crean los usuarios pre-cargados
 */
function createPreUserInformation() {
  Importadores.push(
    new Importador(0101, 'Alfredo', 'Alfredito21', '12345'),
    new Importador(0124, 'Rafael', 'RafaEl1', '113355'),
    new Importador(0221, 'Lucas', 'Lucaaas', '232345')
  );

  Solicitudes.push(
    new Solicitud(0304, 2, 'Esto es una desciprcion que no es una prueba', 'Rocha Este', 10, 0),
    new Solicitud(0305, 1, 'Esto es una desciprcion distinta pero de prueba', 'Salto Sur', 15, 0),
    new Solicitud(0314, 0, 'Esto es una desciprcion de prueba', 'Rio Negro', 12, 2),
    new Solicitud(0422, 1, 'Esto es una desciprcion y ademas es una prueba', 'Punta Del Este', 20, 0),
    new Solicitud(0316, 2, 'Desciprcion para poder hacer pruebas de soli', 'Puerto loco', 30, 1),
    new Solicitud(0317, 2, 'Una desciprcion para poder hacer pruebas de soli', 'Casa Pueblo', 8, 1),
    new Solicitud(0323, 2, 'Desciprcion para poder hacer pruebas de solicitudes', 'Minas', 22, 1),
    new Solicitud(0321, 1, 'Una desciprcion para poder hacer pruebas.', 'Casa Pueblo', 14, 1),
    new Solicitud(0324, 0, 'Esto es una desciprcion para poder hacer pruebas.', 'Montevideo', 18, 1),
    new Solicitud(0326, 2, 'Esto es la desciprcion de pruebas numero me olvide.', 'Montevideo', 10, 1),
  );

  addSolicitudesToImportadores();

  Viajes.push(
    new Viaje(0134, 'BuqueAk-74', 20, '2022/02/15'),
    new Viaje(0237, 'BuquePurple', 15, '2022/01/10')
  );

  Empresas.push(
    new Empresa(0142, 'Administrador', 'Admin1', '123'),
    new Empresa(0241, 'Lucas', 'LucasA', 'Lucas123')
  );

  Viajes.push(new Viaje(0134, "BuqueAk-74", 20, "2022/02/15"), new Viaje(0237, "BuquePurple", 15, "2022/01/10"));

  Empresas.push(new Empresa(0142, "Administrador", "Admin1", "123"), new Empresa(0241, "Lucas", "LucasA", "Lucas123"));

  Empresas[0].supplierTrips = Viajes;
}

function addSolicitudesToImportadores() {
  let index = 0;
  let indexSolicitudes = 0;

  while (index <= Importadores.length && indexSolicitudes < Solicitudes.length) {
    if (index === Importadores.length) {
      index = 0;     
      Solicitudes[indexSolicitudes].requestUserId = Importadores[index].id;
      setPush(Importadores[index].userRequests, Solicitudes[indexSolicitudes]);//Se asigna una solicitud al impotador
    } else {
      Solicitudes[indexSolicitudes].requestUserId = Importadores[index].id;
      setPush(Importadores[index].userRequests, Solicitudes[indexSolicitudes]);
      index++;
    };
    indexSolicitudes++;
  };
};


/**
 *
 * @param {string} username
 * @param {string} pass
 * @param {object} arr
 * @returns null || object
 */

function findUser(username, pass, arr) {
  let user = null;

  arr.forEach(function (admin) {
    if (admin.userAccess === username && admin.userPassword === pass) {
      user = admin;
    }
  });
  return user;
}

function isEmpty(txt) {
  return txt.length == 0;
}

function isValidPass(txt) {
  return txt.length == 0;
}
function isValidNumber(num) {
  return !isNaN(num);
}

function getIdAutonumerico() {
  let newId;

  Empresas.forEach(function (empresa) {
    newId = setId(empresa, newId);
  });
  Importadores.forEach(function (importador) {
    newId = setId(importador, newId);
  });
  Viajes.forEach(function (viaje) {
    newId = setId(viaje, newId);
  });
  Solicitudes.forEach(function (solicitud) {
    newId = setId(solicitud, newId);
  });

  return newId + 2;
}

/**
 *
 * @param {object} value
 * @param {number} newId
 * @returns number
 */
function setId(value, newId) {
  if (!newId) {
    newId = value.id;
  } else if (value.id > newId) {
    newId = value.id;
  }
  return newId;
}

function setPush(array, value) {
  array.push(value);
}

/**
 *
 * @param {number} requestToAsign
 * @returns object || null
 */

function getSolicitudById(requestToAsign) {
  let index = 0;
  let isSolicitudFound = false;
  let objSolicitud = null;

  while (index < Solicitudes.length && !isSolicitudFound) {
    if (Solicitudes[index].id === requestToAsign) {
      objSolicitud = Solicitudes[index];
      isSolicitudFound = true;
    }
    index++;
  }

  return objSolicitud;
}

/**
 *
 * @param {number} number
 * @returns string || ''
 */
function getRequestText(number) {
  let requestTypeText = "";

  switch (number) {
    case 0:
      requestTypeText = "CARGA_GENERAL";
      break;
    case 1:
      requestTypeText = "REFRIGERADO";
      break;
    default:
      requestTypeText = "CARGA_PELIGROSA";
      break;
  }

  return requestTypeText;
}

function getLineOfChargeOnRequest() {
  const lineOfChargeSelector = getQuerySelector("#", "select-line-of-charge", true);

  Empresas.forEach(function (empresa) {
    lineOfChargeSelector.innerHTML += `<option value="${empresa.id}">${empresa.supplierName}</option>`;
  });
}

function getTypeOfCharge(TypeOfCharge) {
  switch (TypeOfCharge) {
    case "0":
      typeOfChargeExpressed = "Carga_General";
      break;
    case "1":
      typeOfChargeExpressed = "Refrigerado";
      break;
    case "2":
      typeOfChargeExpressed = "Carga_Peligrosa";
      break;
  }

  return typeOfChargeExpressed;
}

function onSearchRequest() {
  let requestSearch = getQuerySelector("#", "input-request-search", true).value;
  let requestSearchMinus = requestSearch.toLowerCase();
  let palabraCoincidente = "";

  Solicitudes.forEach(function (solicitud) {
    let requestDescriptionMinus = solicitud.requestDescription.toLowerCase();
    let requestIdSearched = solicitud.id;

    console.log(requestDescriptionMinus.indexOf(requestSearchMinus));

    if (requestDescriptionMinus.indexOf(requestSearchMinus) > -1) {      
      buildConsultarSolicitudes(requestIdSearched);
      /* getLineOfChargeName(solicitud); */
    }
  });
}

/* function getLineOfChargeName(solicitud) {
  Empresas.forEach(function (empresa) {
    if (solicitud.requestSupplierId == empresa.id) {
      return (supplierName = empresa.supplierName);
    }
    return supplierName;
  });
} */


/*Testing*/
function createRquestTable() {
  const RequestPendingTable = getQuerySelector("#", "tabla-asignar-solicitud-de-carga", true);
  OBJ1Selector["RequestPendingTable"] = RequestPendingTable;
  RequestPendingTable.innerHTML = "";

  Solicitudes.forEach(function (solicitud) {
    let rquestStatus = solicitud.requestStatus;
    let statusText = rquestStatus === 0 && "Pendiente";
    let id = solicitud.id;
    let requestTypeText = getRequestText();

    if (id && rquestStatus === 0) {
      RequestPendingTable.innerHTML += `
                <tr data-id='${id}'>
                    <td class="column-manifest-td unique-column-left-al add-plus-al button-asignar-solicitud" data-id='${id}'>+</td>
                    <td class="column-manifest-td">${solicitud.requestOrigin}</td>
                    <td class="column-manifest-td">${solicitud.requestQuantity}</td>
                    <td class="column-manifest-td">${statusText}</td>
                    <td class="column-manifest-td">${solicitud.requestDescription}</td>
                    <td class="column-manifest-td">${requestTypeText}</td>
                </tr>
            `;
    }
  });

  const BtnsAsignarSolicitud = getQuerySelector(".", "button-asignar-solicitud", false);
  BtnsAsignarSolicitud.forEach(function (btn) {
    btn.addEventListener("click", onAsignarSolicitudClick);
  });
}