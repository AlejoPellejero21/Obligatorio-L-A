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
  Importadores.push(
    new Importador(0101, 'Alfredo', 'Alfredito21', '12345'),
    new Importador(0124, 'Rafael', 'RafaEl1', '113355'),
    new Importador(0221, 'Lucas', 'Lucaaas', '232345'),
    new Importador(0320, 'Nicolas', 'NicolaN', '543611A*')
  );

  Solicitudes.push(
    new Solicitud(0304, 0, 'Esto es una desciprcion', 'Montevideo', 4, 1),
    new Solicitud(0412, 1, 'Esto es una desciprcion', 'Punta Del Este', 2, 1),
    new Solicitud(0311, 2, 'Esto es una desciprcion', 'Casa Pueblo', 6, 1),
  )

  Viajes.push(
    new Viaje(0134, 'BuqueAk-74', 20, '2022/02/15'),
    new Viaje(0237, 'BuquePurple', 15, '2022/01/10')
  );

  Viajes[0].shipRequest.push(Solicitudes);

  Empresas.push(
    new Empresa(0142, 'Administrador', 'Admin1', '123'),
    new Empresa(0241, 'Lucas', 'LucasA', 'Lucas123')
  );

  Empresas[0].supplierTrips = Viajes;

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

  Empresas.forEach(function (empresa) { newId = setId(empresa, newId); });
  Importadores.forEach(function (importador) { newId = setId(importador, newId); });
  Viajes.forEach(function (viaje) { newId = setId(viaje, newId); });
  Solicitudes.forEach(function (solicitud) { newId = setId(solicitud, newId); });

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