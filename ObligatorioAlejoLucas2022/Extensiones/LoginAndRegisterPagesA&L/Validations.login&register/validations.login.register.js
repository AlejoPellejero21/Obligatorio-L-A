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
    errMsg: "Por favor ingrese nombre de usuario",
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

function findUser(userAccess, userPassword) {
  let user = null;
  for (let exists in importadores) {
    if (
      importadores.userAccess == userAccess &&
      importadores.userPassword == userPassword
    ) {
      exists = importadores;
    }
  }
  return console.log(exists);
}

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
}
