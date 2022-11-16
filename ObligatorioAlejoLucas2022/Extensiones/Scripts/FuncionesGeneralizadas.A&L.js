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
  Importadores.push(new Importador(0101, "Alfredo", "Alfredito21", "12345"), new Importador(0124, "Rafael", "RafaEl1", "113355"), new Importador(0221, "Lucas", "Lucaaas", "232345"));

  Viajes.push(new Viaje(getIdAutonumerico(), "BuqueAk-74", 47, "2022-11-15"), new Viaje(getIdAutonumerico() + 2, "BuquePurple", 69, "2022-12-10"));

  Empresas.push(new Empresa(0142, "UPS", "Admin-UPS", "ups123"), new Empresa(0241, "DHL", "Admin-DHL", "dhl123"), new Empresa(0341, "MECALUX", "Admin-Mecalux", "1mecalux"));

  Solicitudes.push(
    new Solicitud(getIdAutonumerico(), 2, "Esto es una desciprcion que no es una prueba", "Montevideo", 10, 0142, 0, 1222),
    new Solicitud(getIdAutonumerico() + 1, 1, "Esto es una desciprcion distinta pero de prueba", "Salto", 10, 0142, 0, 1232),
    new Solicitud(getIdAutonumerico() + 4, 2, "Desciprcion para poder hacer pruebas de soli", "Montevideo", 5, 0241, 1, 2422),
    new Solicitud(getIdAutonumerico() + 2, 0, "Esto es una desciprcion de prueba", "Maldonado", 15, 0142, 2, 8888),
    new Solicitud(getIdAutonumerico() + 3, 1, "Esto es una desciprcion y ademas es una prueba", "Rocha", 8, 0142, 0, 2224),
    new Solicitud(getIdAutonumerico() + 6, 1, "Desciprcion para poder hacer pruebas de solicitudes", "Salto", 4, 0241, 1, 1283),
    new Solicitud(getIdAutonumerico() + 5, 2, "Una desciprcion para poder hacer pruebas de soli", "Maldonado", 3, 0241, 0, 1245),
    new Solicitud(getIdAutonumerico() + 7, 1, "Una desciprcion para poder hacer pruebas.", "Rocha", 2, 0241, 2, 1274),
    new Solicitud(getIdAutonumerico() + 9, 1, "Esto es la desciprcion de pruebas numero me olvide.", "Maldonado", 5, 0241, 3, 8383),
    new Solicitud(getIdAutonumerico() + 8, 0, "Esto es una desciprcion para poder hacer pruebas.", "Montevideo", 6, 0241, 1, 3844),
    new Solicitud(getIdAutonumerico() + 10, 0, "Esto es la desciprcion de pruebas numero me olvide.", "Salto", 12, 0341, 0, 8383),
    new Solicitud(getIdAutonumerico() + 11, 2, "Esto es la desciprcion de pruebas numero me olvide.", "Rocha", 7, 0341, 2, 8383),
    new Solicitud(getIdAutonumerico() + 12, 1, "Esto es la desciprcion de pruebas numero me olvide.", "Montevideo", 2, 0341, 1, 8383),
    new Solicitud(getIdAutonumerico() + 13, 2, "Esto es la desciprcion de pruebas numero me olvide.", "Montevideo", 9, 0341, 3, 8383)
  );

  addSolicitudesToImportadores();
  addSolicitudesToViajes();

  //Se le asignan a la empresa viajes
  Empresas[0].supplierTrips = Viajes;
  Viajes[0].shipSupplierId = Empresas[0].id;
  Viajes[1].shipSupplierId = Empresas[0].id;

  //Se desabilita un usuario
  Importadores[2].userEnabled = false;
}

function addSolicitudesToViajes() {
  Solicitudes.forEach(function (solicitud, index) {
    if (solicitud.requestStatus === 1) {
      let paresNumber = index % 2;
      if (paresNumber === 0) {
        setPush(Viajes[paresNumber].shipRequest, solicitud);
      } else {
        setPush(Viajes[paresNumber].shipRequest, solicitud);
      }
      solicitud.requestTravelNumber = Viajes[paresNumber].id;
      Viajes[paresNumber].shipQuantityAvailable -= solicitud.requestQuantity;
    }
  });
}

function addSolicitudesToImportadores() {
  let index = 0;
  let indexSolicitudes = 0;

  while (index <= Importadores.length && indexSolicitudes < Solicitudes.length) {
    if (index === Importadores.length) {
      index = 0;
      Solicitudes[indexSolicitudes].requestUserId = Importadores[index].id;
      setPush(Importadores[index].userRequests, Solicitudes[indexSolicitudes]); //Se asigna una solicitud al impotador
    } else {
      Solicitudes[indexSolicitudes].requestUserId = Importadores[index].id;
      setPush(Importadores[index].userRequests, Solicitudes[indexSolicitudes]);
      index++;
    }
    indexSolicitudes++;
  }
}

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

/*All seach logic here*/
function onSearchRequest() {
  const InputSearch = OBJ1Selector.InputRequestSearch.value;
  let generalSearchText = InputSearch.toLowerCase();
  let largeToSearch = generalSearchText.length;
  let isDescription = false;

  if (largeToSearch > 1 && InputSearch !== "") {
    OBJ1Selector.requestTable.innerHTML = "";
    userLogged.userRequests.forEach(function (solicitud) {
      let description = solicitud.requestDescription;

      if (solicitud.requestStatus === 0) {
        let index = 0;
        while (index < description.length && !isDescription) {
          let sliceEnd = index + largeToSearch;
          let slicePartDescription = description.slice(index, sliceEnd);
          if (slicePartDescription.toLowerCase() === generalSearchText) {
            createPendingRequestTable(solicitud.requestOrigin, solicitud.requestQuantity, getSupplierName(solicitud), solicitud.requestDescription, solicitud.requestType, solicitud.id);
            isDescription = true;
          }
          index++;
        }
      }
    });

    if (!isDescription) {
      alert("No se han encontrado resultados a su busqueda");
    }
  } else {
    onConsultarSolicitudes();
  }
}
