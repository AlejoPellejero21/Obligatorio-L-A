let registerValidators = [
  {
    id: "inputName",
    errMsg: "Por favor ingrese nombre",
    fnValidate: isEmpty,
  },

  {
    id: "inputUsername",
    errMsg: "Por favor ingrese nombre de usuario",
    fnValidate: isEmpty,
  },
  {
    id: "usernameInUse",
    errMsg: "Por favor ingrese nombre de usuario que no este en uso",
    fnValidate: findUser,
  },
  {
    id: "inputPassword",
    errMsg: "Por favor ingrese contraseña",
    fnValidate: isEmpty,
  },
  {
    id: "selectAvatar",
    errMsg: "Por favor seleccione una foto",
    fnValidate: isEmpty,
  },
];

let loginValidators = [
  {
    id: "inputUsername",
    errMsg: "ingrese un nombre de usuario valido",
    fnValidate: findUser,
  },
  {
    id: "selectAvatar",
    errMsg: "Por favor seleccione una foto",
    fnValidate: isEmpty,
  },
  {
    id: "selectAvatar",
    errMsg: "Por favor seleccione una foto",
    fnValidate: isEmpty,
  },
  {
    id: "selectAvatar",
    errMsg: "Por favor seleccione una foto",
    fnValidate: isEmpty,
  },
];

function isEmpty(txt) {
  return txt.length == 0;
}

function isValidPass(txt) {
  return txt.length == 0;
}
function isValidNumber(num) {
  return !isNaN(num);
}

//Pruebas de validaciones - funciona con clases

class Admin {
  constructor(id, username, pass) {
    // ejemplo
    this.id = id;
    this.username = username;
    this.pass = pass;
  }
}

class Empresa {
  constructor(id, username, pass) {
    // ejemplo
    this.id = id;
    this.username = username;
    this.pass = pass;
  }
}

// Prueba para comprobar validaciones
// id, name, username, password

const pruebaImportadores = [
  new Admin(1, "admin", "admin.123"),
  new Admin(2, "admin2", "admin.1234"), // prueba de usuarios
];

const pruebaEmpresas = [
  new Empresa(1, "falopiño", "123"),
  new Empresa(2, "falopardi", "123"), // prueba de usuarios
];

// findUser funciona para ambos usuarios
function findUser(username, pass, arr) {
  console.log('holo')
  let user = null;
  arr.forEach(function (admin) {
    if (admin.username == username && admin.pass == pass) {
      user = admin;
    }
  });
  return user;
}

/*
function formValidator(validations) {
  let iterador = 0;

  let failedValidation = null;

  while (iterador < validations.length && !failedValidation) {
    const value = document.querySelector(validations[iterador].id).value;
    if (!validations[iterador].fnValidate(value)) {
      failedValidation = validations[iterador];
    }
    iterador++;
  }
  return failedValidation;
}*/
