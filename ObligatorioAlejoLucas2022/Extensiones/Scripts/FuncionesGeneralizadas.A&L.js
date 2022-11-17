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
        attr.style.display = 'flex';
    } else {
        attr.style.display = 'none';
    }
}

/**
 * Se crean los usuarios pre-cargados
 */
function createPreUserInformation() {
    Importadores.push(new Importador(0101, 'Alfredo', 'Alfredito21', '12345'), new Importador(0124, 'Rafael', 'RafaEl1', '113355'), new Importador(0221, 'Lucas', 'Lucaaas', '232345'));

    Viajes.push(
        new Viaje(getIdAutonumerico(), 'BuqueAk-74', 47, '2022-11-29', 0),
        new Viaje(getIdAutonumerico() + 2, 'BuquePurple', 69, '2022-12-10', 0),
        new Viaje(getIdAutonumerico() + 3, 'BuqueLemon', 92, '2022-12-18', 0),
        new Viaje(getIdAutonumerico() + 4, 'BuqueGorilla', 38, '2023-01-5', 0),
        new Viaje(getIdAutonumerico() + 5, 'BuqueWidow', 71, '2023-01-13', 0),
        new Viaje(getIdAutonumerico() + 6, 'BuqueBlueBerry', 52, '2022-12-28', 0),
        new Viaje(getIdAutonumerico() + 7, 'BuqueAmnesiaOriginal', 96, '2022-11-30', 0)
    );

    Empresas.push(new Empresa(0142, 'UPS', 'Admin-UPS', 'ups123'), new Empresa(0241, 'DHL', 'Admin-DHL', 'dhl123'), new Empresa(0341, 'MECALUX', 'Admin-Mecalux', '1mecalux'));

    Solicitudes.push(
        new Solicitud(getIdAutonumerico(), 2, 'Esto es una desciprcion que no es una prueba', 'Montevideo', 10, 0142, 0, 1222),
        new Solicitud(getIdAutonumerico() + 1, 1, 'Esto es una desciprcion distinta pero de prueba', 'Salto', 10, 0142, 0, 1232),
        new Solicitud(getIdAutonumerico() + 4, 2, 'Desciprcion para poder hacer pruebas de soli', 'Montevideo', 5, 0241, 1, 2422),
        new Solicitud(getIdAutonumerico() + 2, 0, 'Esto es una desciprcion de prueba', 'Maldonado', 15, 0142, 2, 8888),
        new Solicitud(getIdAutonumerico() + 3, 1, 'Esto es una desciprcion y ademas es una prueba', 'Rocha', 8, 0142, 0, 2224),
        new Solicitud(getIdAutonumerico() + 6, 1, 'Desciprcion para poder hacer pruebas de solicitudes', 'Salto', 4, 0241, 1, 1283),
        new Solicitud(getIdAutonumerico() + 5, 2, 'Una desciprcion para poder hacer pruebas de soli', 'Maldonado', 3, 0241, 0, 1245),
        new Solicitud(getIdAutonumerico() + 7, 1, 'Una desciprcion para poder hacer pruebas.', 'Rocha', 2, 0241, 2, 1274),
        new Solicitud(getIdAutonumerico() + 9, 1, 'Esto es la desciprcion de pruebas numero me olvide.', 'Maldonado', 5, 0241, 3, 8383),
        new Solicitud(getIdAutonumerico() + 8, 0, 'Esto es una desciprcion para poder hacer pruebas.', 'Montevideo', 6, 0241, 1, 3844),
        new Solicitud(getIdAutonumerico() + 10, 0, 'Esto es la desciprcion de pruebas numero me olvide.', 'Salto', 12, 0341, 0, 8383),
        new Solicitud(
            getIdAutonumerico() + 11,
            2,
            'Esto es la desciprcion de pruebas para poder buscar resultados, es necesario contar con numeros tambien como el 1 o el 3.',
            'Rocha',
            7,
            0341,
            1,
            8383
        ),
        new Solicitud(getIdAutonumerico() + 12, 1, 'Esto es la desciprcion, ya que voy haciendo tantas pruebas que me olvide de como seguia.', 'Montevideo', 2, 0341, 1, 8383),
        new Solicitud(getIdAutonumerico() + 13, 2, 'Esto es la desciprcion de pruebas numero 1000/8 es probable que no sea la misma que 10% de $200', 'Montevideo', 9, 0341, 1, 8383),
        new Solicitud(getIdAutonumerico() + 14, 1, 'Esto es la desciprcion de pruebas numero me olvide para hacer pruebas que no me acuerdo.', 'Montevideo', 9, 0341, 3, 8383),
        new Solicitud(getIdAutonumerico() + 15, 2, 'Esto es la desciprcion de pruebas numero me olvide ya que voy haciendo tantas pruebas que me pesan las ideas.', 'Rocha', 7, 0341, 1, 8383),
        new Solicitud(getIdAutonumerico() + 16, 0, 'Esto es la desciprcion de pruebas numero 100, ahora me acorde cuatas eran XD.', 'Maldonado', 12, 0341, 1, 8383),
        new Solicitud(getIdAutonumerico() + 17, 1, 'Esto es la desciprcion que se creo en un comienzo del siglo actual para poder hacer pruebas.', 'Salto', 8, 0341, 1, 8383),
        new Solicitud(getIdAutonumerico() + 18, 2, 'Esto es la desciprcion de pruebas numero treinta creada antes de cristo en minuscula.', 'Rocha', 11, 0341, 1, 8383),
        new Solicitud(getIdAutonumerico() + 19, 2, 'Esta descripcion cuenta como una descripcion quizas no es la mejor pero igual sirve para buscar.', 'Montevideo', 3, 0341, 1, 8383)
    );

    addSolicitudesToImportadores();
    addSolicitudesToViajes();
    addViajesToEmpresas();

    //Se le asignan a la empresa viajes
    /* Empresas[0].supplierTrips = Viajes;
  Viajes[0].shipSupplierId = Empresas[0].id;
  Viajes[1].shipSupplierId = Empresas[0].id; */

    //Se desabilita un usuario
    Importadores[2].userEnabled = false;
}

function addViajesToEmpresas() {
    let index = 0;

    Viajes.forEach(function (viaje) {
        let isAdded = false;
        //Recorro las emrpesas que son 3 y le agrego un viaje por cada iteracion
        //Si llego al maximo de empresas 3/3 vuelvo a resetar el index a 0
        while (index < Empresas.length && !isAdded) {
            let empresaId = Empresas[index].id;
            if (empresaId) {
                viaje.shipSupplierId = empresaId;
                setPush(Empresas[index].supplierTrips, viaje);
                isAdded = true;
            }
            index++;
            if (index === Empresas.length) {
                index = 0;
            }
        }
    });
}

//Esta funcion crea los casos pre-cargados
function addSolicitudesToViajes() {
    let indexViaje = 0;

    Solicitudes.forEach(function (solicitud) {
        let isNext = false;

        if (solicitud.requestStatus === 1) {
            while (indexViaje < Viajes.length && !isNext) {
                solicitud.requestTravelNumber = Viajes[indexViaje].id;
                setPush(Viajes[indexViaje].shipRequest, solicitud);
                Viajes[indexViaje].shipQuantityAvailable -= solicitud.requestQuantity;
                isNext = true;
                indexViaje++;
                if (indexViaje === Viajes.length) {
                    indexViaje = 0;
                }
            }
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
// Busca el username
function findUser(username, arr) {
    let user = null;

    arr.forEach(function (admin) {
        if (admin.userAccess === username) {
            user = admin;
        }
    });
    return user;
}

//Valida que el campo no este vacio
function isEmpty(txt) {
    return txt.length == 0;
}

//Valida que el campo no este vacio
function isValidPass(txt) {
    return txt.length == 0;
}

// Valida que sea un numero
function isValidNumber(num) {
    return !isNaN(num);
}

// Valida que la foto no sea el texto default
function isNotValidPicture(txt) {
    let validPicture = true;
    if (txt == 'default-profile-icon') {
        validPicture = false;
    }
    return validPicture;
}

// Valida la contraseña contra el código ASCII --- Mayusculas(65-90) - Minusculas(97-122) - numeros(48-57)
function isValidPassword(txt) {
    i = 0;
    let existMayus = false;
    let existMinus = false;
    let existNum = false;
    let cumpleReq = false;

    while (i < txt.length) {
        let numTxt = parseInt(txt[i]);

        if (txt.charCodeAt(i) >= 65 && txt.charCodeAt(i) <= 90) {
            existMayus = true;
        } else if (txt.charCodeAt(i) >= 97 && txt.charCodeAt(i) <= 122) {
            existMinus = true;
        } else if (txt.charCodeAt(i) >= 48 && txt.charCodeAt(i) <= 57) {
            existNum = true;
        }

        if (existMayus && existMinus && existNum) {
            cumpleReq = true;
        }

        console.log(i);

        i++;
    }
    return cumpleReq;
}

//Obtiene un ID al azar
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

function validatePassword(password) {
    let i = 0;
    let cumplePassword = false;
    let existeMayus = false;
    let existeMinus = false;
    let existeNum = false;
    let alfNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let upperPass = password.toUpperCase();
    let lowerPass = password.toLowerCase();

    console.log(upperPass, lowerPass);

    while (i < password.length) {
        let checkNumber = Number(alfNum[i]);

        if (password[i] === upperPass[i]) {
            existeMayus = true;
            console.log(existeMayus, 'mayus', password[i], upperPass[i]);
        } else if (password[i] === lowerPass[i]) {
            existeMinus = true;
            console.log(existeMinus, 'minus', password[i]);
        } /*else if (Number(password[i]) === checkNumber) {
      existeNum = true;
      console.log()*/ else if (existeMayus && existeMinus /*&& existeNum*/) {
            /*}*/
            console.log('vapai');
            return (cumplePassword = true);
        }

        i++;
    }
    console.log(cumplePassword);
    return cumplePassword;
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
    let requestTypeText = '';

    switch (number) {
        case 0:
            requestTypeText = 'CARGA_GENERAL';
            break;
        case 1:
            requestTypeText = 'REFRIGERADO';
            break;
        default:
            requestTypeText = 'CARGA_PELIGROSA';
            break;
    }

    return requestTypeText;
}

function getLineOfChargeOnRequest() {
    const lineOfChargeSelector = getQuerySelector('#', 'select-line-of-charge', true);

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

    if (largeToSearch > 1 && InputSearch !== '') {
        OBJ1Selector.requestTable.innerHTML = '';
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
            alert('No se han encontrado resultados a su busqueda');
        }
    } else {
        onConsultarSolicitudes();
    }
}
